import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

const Tiles = ({layouts, onLayoutChange, children}) => {
    const childs = children.filter((child) => child).length;
    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: childs > 2 ? 3 : childs > 1 ? 2 : 1, md: childs > 2 ? 3 : childs > 1 ? 2 : 1, sm: 1, xs: 1, xxs: 1 }}
            rowHeight={300}
            width={1000}
            onLayoutChange={onLayoutChange}
            draggableHandle=".handle-drag"
        >
            {children}
        </ResponsiveGridLayout>
    );
}

export default Tiles;