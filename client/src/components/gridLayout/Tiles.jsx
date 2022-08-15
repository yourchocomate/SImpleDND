import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

const Tiles = ({layouts, children}) => {

    const getLayouts = () => {
        const saved = localStorage.getItem("chart-grid-layouts");
        return saved && saved != null ? JSON.parse(saved) : layouts;
    }

    const handleLayoutChange = (layout, layouts) => {
        localStorage.setItem("chart-grid-layouts", JSON.stringify(layouts));
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={getLayouts()}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 3, md: 3, sm: 1, xs: 1, xxs: 1 }}
            rowHeight={300}
            width={1000}
            onLayoutChange={handleLayoutChange}
            draggableHandle=".handle-drag"
        >
            {children}
        </ResponsiveGridLayout>
    );
}

export default Tiles;