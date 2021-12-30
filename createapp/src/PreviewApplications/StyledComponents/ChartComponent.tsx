import { observer } from 'mobx-react';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
import {Chart as ChartJS, registerables, Legend, LineElement, PointElement, Title, Tooltip, LinearScale } from 'chart.js';
import store, { Chartdata } from '../../store';


ChartJS.register(
    ...registerables,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  function Chartcomponent(props:{xaxislabel:string;yaxislabel:string;data:string;height:string,xlabel:string[];ydata:number[];width:string,id:number,background:string,borderColor:string;borderWidth:string;x:number;y:number;}) {
    
    return (
        <div style={{
            position: 'absolute',
            top: props.y ,
            left: props.x ,
            width:props.width,
            height:props.height,
        }}
        className='border'
        draggable
        tabIndex={0}
        onDragStart={(e:any) => {
        let dragobject = JSON.stringify({'type':'chart','freshness':'old','id':props.id});
        e.dataTransfer.setData('dragobject',dragobject);
    }}

        onClick={() => {
            store.properties = 'chart';
            store.componentIdChangeProperty = props.id;
        }}
        >
            <Bar 
                data={{
                    labels: props.xlabel,
                    datasets: [
                        {
                          label: props.data,
                          backgroundColor: props.background,
                          borderColor: props.borderColor,
                          data: props.ydata,
                        }
                      ]   
                }} 
                
                height= '100%'
                width= '100%'
                options = {{
                    responsive: true,
                    scales: {
                        yAxes: {
                            title: {
                                display: true,
                                text: props.yaxislabel,
                                font: {
                                    size: 15
                                }
                            },
                            ticks: {
                                precision: 0
                            }
                        },
                        xAxes: {
                            title: {
                                display: true,
                                text: props.xaxislabel,
                                font: {
                                    size: 15
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title:{
                            display: true,
                            text: props.data,
                        }
                    }
                  }}
                  
            
            />
        </div>
    )
}


export default observer(Chartcomponent);