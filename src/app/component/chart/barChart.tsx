
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

function BarChart() {


    const color =[
        {name:"red", color:"#433E49", value: "300"},
        {name:"green", color:"#928490",value: "200"},
        {name:"blue", color:"#DBC1AD", value: "500"},
        {name:"yellow", color:"#F3E8EB", value: "200"},
        {name:"purple", color:"#872642", value: "100"},
    ]

    const color2 = [
        { name: "red", color: "#433E49", value: "220" },
        { name: "green", color: "#928490", value: "330" },
        { name: "blue", color: "#DBC1AD", value: "240" },
        { name: "yellow", color: "#F3E8EB", value: "320" },
        { name: "purple", color: "#872642", value: "420" },
    ]

    const labels = color.map((i) => i.name)
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: 'one',
                type: 'line',
                pointStyle: false,
                data: color.map((i) => i.value),
                backgroundColor: '#872642',
                borderColor : 'white',
                radius: 5,
            },
            {
                label: 'twe',
                type: 'bar',
                pointStyle: false,
                data: color2.map((i) => i.value),
                backgroundColor: color2.map((i) => i.color),
                borderColor : 'white',
                radius: 5,
            },
        ],
    };


    const totalDuration = 600;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx:any) =>
        ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(10)
            : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
        x: {
            display : true,
            // type: 'number',
            // easing: 'linear',
            // duration: delayBetweenPoints,
            // from: NaN, // the point is initially skipped
            // delay(ctx:any) {
            //     if (ctx.type !== 'data' || ctx.xStarted) {
            //         return 0;
            //     }
            //     ctx.xStarted = true;
            //     return ctx.index * delayBetweenPoints;
            // }
        },
        y: {
            display:true,
            // type: 'number',
            // easing: 'linear',
            // duration: delayBetweenPoints,
            // from: previousY,
            // delay(ctx:any) {
            //     if (ctx.type !== 'data' || ctx.yStarted) {
            //         return 0;
            //     }
            //     ctx.yStarted = true;
            //     return ctx.index * delayBetweenPoints;
            // }
        }
    };

    const oprions: any = {
        animation,
        interaction: {
            intersect: false
          },
        scales: {
            x: {
                // type: 'linear',
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <Bar data={data} options={oprions} className='w-full'></Bar>
    );
}
export default BarChart;
