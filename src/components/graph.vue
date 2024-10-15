<template>
    <div></div>
</template>

<script>
export default {
    name: 'Dashboard',
    mounted() {
        this.loadScripts();
        this.initializeOverlayScrollbars();
        this.initializeApexCharts();
        this.initializeSortable();
        this.initializeJsVectorMap();
    },
    methods: {
        loadScripts() {
            const scripts = [
                "https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js",
                "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
                "https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js",
                "https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js",
                "https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/js/jsvectormap.min.js",
                "https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/maps/world.js",
            ];

            const loadScript = (src) => {
                return new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.async = true;
                    script.onload = resolve;
                    document.body.appendChild(script);
                });
            };

            Promise.all(scripts.map(loadScript)).then(() => {
                this.initializeOverlayScrollbars();
                this.initializeApexCharts();
                this.initializeSortable();
                this.initializeJsVectorMap();
            });
        },
        initializeOverlayScrollbars() {
            const sidebarWrapper = this.$refs.sidebarWrapper;
            if (sidebarWrapper && typeof OverlayScrollbars !== 'undefined') {
                OverlayScrollbars(sidebarWrapper, {
                    scrollbars: {
                        theme: "os-theme-light",
                        autoHide: "leave",
                        clickScroll: true,
                    },
                });
            }
        },
        initializeApexCharts() {
            const sales_chart_options = {
                series: [
                    { name: "Digital Goods", data: [28, 48, 40, 19, 86, 27, 90] },
                    { name: "Electronics", data: [65, 59, 80, 81, 56, 55, 40] },
                ],
                chart: { height: 300, type: "area", toolbar: { show: false } },
                legend: { show: false },
                colors: ["#0d6efd", "#20c997"],
                dataLabels: { enabled: false },
                stroke: { curve: "smooth" },
                xaxis: {
                    type: "datetime",
                    categories: [
                        "2023-01-01", "2023-02-01", "2023-03-01",
                        "2023-04-01", "2023-05-01", "2023-06-01",
                        "2023-07-01"
                    ],
                },
                tooltip: { x: { format: "MMMM yyyy" } },
            };

            const sales_chart = new ApexCharts(document.querySelector("#revenue-chart"), sales_chart_options);
            sales_chart.render();
        },
        initializeSortable() {
            const connectedSortables = this.$el.querySelectorAll(".connectedSortable");
            connectedSortables.forEach((connectedSortable) => {
                new Sortable(connectedSortable, {
                    group: "shared",
                    handle: ".card-header",
                });
            });

            const cardHeaders = this.$el.querySelectorAll(".connectedSortable .card-header");
            cardHeaders.forEach((cardHeader) => {
                cardHeader.style.cursor = "move";
            });
        },
        /**
         * Initializes the world map and renders the sparkline charts.
         * 
         * @see https://www.10bestdesign.com/jqvmap/multi-map-demo/
         */
        initializeJsVectorMap() {
            const visitorsData = {
                US: 398, SA: 400, CA: 1000, DE: 500,
                FR: 760, CN: 300, AU: 700, BR: 600,
                IN: 800, GB: 320, RU: 3000,
            };

            const map = new jsVectorMap({
                selector: "#world-map",
                map: "world",
            });

            // Initialize sparkline charts
            this.renderSparkline("#sparkline-1", [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]);
            this.renderSparkline("#sparkline-2", [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]);
            this.renderSparkline("#sparkline-3", [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]);
        },
        renderSparkline(selector, data) {
            const options = {
                series: [{ data }],
                chart: { type: "area", height: 50, sparkline: { enabled: true } },
                stroke: { curve: "straight" },
                fill: { opacity: 0.3 },
                yaxis: { min: 0 },
                colors: ["#DCE6EC"],
            };

            const sparkline = new ApexCharts(document.querySelector(selector), options);
            sparkline.render();
        },
    },
};
</script>