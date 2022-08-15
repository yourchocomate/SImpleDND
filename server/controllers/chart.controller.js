const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const { JSONResponse, ChartResponse } = require("../responses");


module.exports = {
    name: "ChartController", //Controller Name

    getActiveUsersByCountry: (req, res) => {
        sequelize.query(getChartQuery('country'), { 
            type: QueryTypes.SELECT
        })
        .then((result) => {
            return ChartResponse.success(res, result);
        })
        .catch ((err) => {
            return ChartResponse.error(res, err.message, 503);
        });
    },
    getActiveUsersByGender: (req, res) => {
        sequelize.query(getChartQuery('gender'), { 
            type: QueryTypes.SELECT
        })
        .then((result) => {
            return ChartResponse.success(res, result);
        })
        .catch ((err) => {
            return ChartResponse.error(res, err.message, 503);
        });
    },
    getActiveUsersByDevice: (req, res) => {
        sequelize.query(getChartQuery('device'), { 
            type: QueryTypes.SELECT
        })
        .then((result) => {
            return ChartResponse.success(res, result);
        })
        .catch ((err) => {
            return ChartResponse.error(res, err.message, 503);
        });
    },
    getTopUsers: (req, res) => {
        sequelize.query(`
                SELECT
                    u.username, u.country
                FROM
                    (
                        SELECT
                            user_id, count(user_id) as count
                        FROM 
                            user_session
                        GROUP BY 
                            user_id
                        ORDER BY 
                            count DESC
                        LIMIT 15
                    ) us
                LEFT JOIN users AS u ON us.user_id = u.id
        `, { 
            type: QueryTypes.SELECT
        })
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch ((err) => {
            return JSONResponse.error(res, err.message, 503);
        });
    },

}


const getChartQuery = (segmentation) => {
    return `
        WITH dau AS
        (
        SELECT date(opened) AS opened,
                COUNT(DISTINCT user_id) AS dau, ${segmentation}
        FROM user_session ds
        WHERE opened > current_timestamp - interval 1 month
        GROUP BY date(opened), ${segmentation}
        )
        SELECT ${segmentation} as name,
            dau,
            (SELECT COUNT(DISTINCT user_id)
                FROM user_session as ds
                WHERE ds.opened 
                BETWEEN dau.opened - INTERVAL 1 MONTH AND dau.opened
                AND ds.${segmentation} = dau.${segmentation}
                ) AS mau,
                
            (SELECT COUNT(DISTINCT user_id)
                FROM user_session as ds
                WHERE ds.opened 
                BETWEEN dau.opened - INTERVAL 7 day AND dau.opened
                AND ds.${segmentation} = dau.${segmentation}
                ) AS wau
        FROM dau
        WHERE DATE(opened) = CURRENT_DATE()
        ORDER BY opened`;
}