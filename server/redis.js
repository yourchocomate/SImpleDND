const Redis = require('ioredis')
const redis = new Redis()

const RedisAdaptor = require('sequelize-transparent-cache-ioredis')
const redisAdaptor = new RedisAdaptor({
  client: redis,
  namespace: 'model',
  lifetime: 60 * 60
})

const sequelizeCache = require('sequelize-transparent-cache')
const { withCache } = sequelizeCache(redisAdaptor)

const object = {}

object.CacheModel = withCache;
object.Cache = redisAdaptor;
module.exports = object; 