
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function NasdaqBarChart() {


    
    const color = [
        { date: "24-07-01", value: "300" },
        { date: "24-07-02", value: "200" },
        { date: "24-07-03", value: "500" },
        { date: "24-07-04", value: "200" },
        { date: "24-07-05", value: "100" },
        { date: "24-07-06", value: "300" },
        { date: "24-07-07", value: "200" },
        { date: "24-07-08", value: "500" },
        { date: "24-07-09", value: "200" },
        { date: "24-07-10", value: "100" },
        { date: "24-07-11", value: "300" },
        { date: "24-07-12", value: "200" },
        { date: "24-07-13", value: "500" },
        { date: "24-07-14", value: "200" },
        { date: "24-07-15", value: "100" },
        { date: "24-07-16", value: "100" },
        { date: "24-07-17", value: "300" },
        { date: "24-07-18", value: "200" },
        { date: "24-07-19", value: "500" },
        { date: "24-07-20", value: "200" },
        { date: "24-07-21", value: "100" },
        { date: "24-07-22", value: "100" },
        { date: "24-07-23", value: "300" },
        { date: "24-07-24", value: "200" },
        { date: "24-07-25", value: "100" },
        { date: "24-07-26", value: "100" },
        { date: "24-07-27", value: "300" },
        { date: "24-07-28", value: "200" },
        { date: "24-07-29", value: "500" },
        { date: "24-07-30", value: "200" },
        { date: "24-07-31", value: "100" },
    ]


    const labels = color.map((i) => i.date)
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: 'one',
                type: 'bar',
                pointStyle: false,
                data: color.map((i) => i.value),
                backgroundColor: '#872642',
                borderColor: 'white',
                radius: 5,
            },
        ],
    };


    const totalDuration = 600;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx: any) =>
        ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(10)
            : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
        x: {
            display: true,
        },
        y: {
            display: true,
        }
    };

    const oprions: any = {
        animation,
        interaction: {
            intersect: false
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                max : 31,
            },
            y: {
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels :{
                display : false,
            },
        },
    }

    return (
        <Bar data={data} options={oprions} className='w-full h-full'></Bar>
    );
}
export default NasdaqBarChart;
