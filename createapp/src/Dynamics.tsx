import {  toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { NumberToStringArray, stringToNumberArray } from "./HelperFunctions/Conversion";
import { TailwindToRGB } from "./HelperFunctions/TailwindToRGB";
import { defaultBorderColor, defaultBorderWidth } from "./Names";
import store from "./store";

function FindAndUpdateProperties(property:any){
    let id = store.componentIdChangeProperty;
    console.log('isndie findandupdateprotptyies funtion',property);
    let newItem;
    if(id){
        if(store.listItems && store.listItems.length){
            store.listItems = store.listItems.filter((item) => {
                if(item.id === id){
                    newItem = Object.assign(item,property);
                    return 
                }else{
                     return item;
                }
            })
            store.listItems = [...store.listItems,newItem]
            console.log('store item exists and constnent ',toJS(store.listItems))
        }
    }
}

export function General(props: { name: string }){
    return (
        <div className='w-full mt-2 mb-3'>
            <p className='capitalize font-medium text-lg'>{props.name}</p>
        </div>
    )
}

export const Label = (props:{labelname:string;}) => {
    const [input, setinput] = useState(props.labelname);
    useEffect(() => {
        if(input !== props.labelname){
            setinput(props.labelname)
            console.log('setting input to prosp label');
        }else console.log('not seeting input to label ',input,props.labelname)
    },[props])
    
    return (
        <div className='w-full mb-3'>
            <p className='sm font-light text-sm'>Label</p>
            <input className='p-1 border focus:outline-none border-gray w-full' value={input} 

            onChange={(e) => {
                setinput(e.target.value)
                let object = {
                    'data': e.target.value
                }
                FindAndUpdateProperties(object);
            }}
            ></input>
        </div> 
    )
}

export const Disable = observer(() => {
    const handleDisable = () => {
        FindAndUpdateProperties({'disabled':store.buttonDisable})
    }
    return (
        <div className='w-full flex items-center mb-3'>
            <div className='flex-1 text-md'>Disable</div>
            <div className='w-10 h-4 relative rounded-xl bg-gray-300 border'
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                store.buttonDisable = !store.buttonDisable;
                handleDisable();
            }}>
                <div className={`absolute  w-4 h-4  rounded-full bg-red-400
                ${store.buttonDisable && 'w-10 bg-black'} transition-all duration-300`}
                ></div>
            </div>
        </div>
    )
})

export const Colors = observer((props:{color:string;}) => {
    const [color, setcolor] = useState<string>(store.backgroundColorButton);
    const [dialogbox, setdialogbox] = useState<boolean>(false);

    const handleChangeInProperties = (colorName:string,background: { background: string; }) => {
        setcolor(colorName);
        store.backgroundColorButton = colorName;
        setdialogbox(!dialogbox);
        FindAndUpdateProperties(background);
    }
    return (
        <div className={`w-full p-1 border mb-3 relative ${dialogbox && 'border-red-700'}`}
        onClick={() => setdialogbox(!dialogbox)}>
            <div className={`w-4 h-4 ${color}`}  
            >
            {dialogbox && (
                <div className='absolute shadow-md top-8 left-1 w-full p-2 flex flex-wrap bg-white'>
                    <div className={`w-8 h-8 bg-yellow-400 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-400',{'background':'rgba(251, 191, 36,1)'})    
                    }}
                    ></div>
                    <div className={`w-8 h-8 bg-red-700 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-red-700',{'background':'rgba(185, 28, 28,1)'})    
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-blue-700 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-blue-700',{'background':'rgba(29, 78, 216,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-blue-300 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-blue-300',{'background':'rgba(147, 197, 253,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-green-500 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-green-500',{'background':'rgba(16, 185, 129,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-white relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-white',{'background':'rgba(255, 255, 255,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-black relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-black',{'background':'rgba(0, 0, 0,1)'})
                    }}
                    ></div>  
                    <div className={`w-8 h-8 bg-yellow-800 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-800',{'background':'rgba(146, 64, 14,1)'})
                    }}
                    ></div>  
                    <div className={`w-8 h-8 bg-yellow-600 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-600',{'background':'rgba(217, 119, 6,1)'})
                    }}
                    ></div>  
                </div>
                )}

            </div>
        </div>
    )
})



export const ButtonVariant = observer(() => {
    const handleVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let object;
        if(e.target.value === 'primary'){
            object = {
                'borderColor': defaultBorderColor,
                'borderWidth': defaultBorderWidth,
                'background' : TailwindToRGB(store.backgroundColorButton)
            }
            FindAndUpdateProperties(object);
        }else if(e.target.value === 'secondary'){
            let color = store.backgroundColorButton && store.backgroundColorButton.slice(3,);
            object = {
                "borderColor": 'border-'+color,
                'background' : 'transparent',
                'borderWidth':  '2px',
            }
            FindAndUpdateProperties(object);
        }else if(e.target.value === 'tertiary'){
            let color = store.backgroundColorButton && store.backgroundColorButton.slice(3,);
            object = {
                'background' : 'transparent',
                'borderWidth':  '0px',
                'borderColor':  'border-'+color,
            }
            FindAndUpdateProperties(object);
        }
    }
    return (
        <div className='w-full'>
            <p className=''>Button Variant </p>
            <select className='w-full p-2 focus:outline-none border mb-3'
            onChange={(e) => {
                handleVariant(e);

                }}>
                <option  className='p-1' value='primary'>Primary</option>
                <option className='p-1' value='secondary'>Secondary</option>
                <option className='p-1' value='tertiary'>Tertiary</option>
            </select>
        </div>
    )
})


export const BorderRadius = observer(() => {
    return (
        <div className='w-full mb-3'>
            <p>Border Radius</p>
            <div className='w-full flex border'>
                <div className='flex justify-center items-center p-2 border hover:border-blue-600 flex-1'
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        let object = {'borderRadius':'0rem'};
                        FindAndUpdateProperties(object)
                    }}>
                    <div className='w-4 h-4 bg-gray-400'></div>
                </div>
                <div className='flex justify-center items-center p-2 border hover:border-blue-600 flex-1'
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        let object = {'borderRadius':'0.375rem'};
                        FindAndUpdateProperties(object);
                    }}>
                    <div className='w-4 h-4 bg-gray-400 rounded-md'></div>
                </div>
            </div>
        </div>
    )
})

export const BoxShadow = observer(() => {
    return (
        <div className='w-full'>
            <p className='capitalize'>Box shadow</p>
            <div className='grid gap-2 grid-cols-3 mb-3'>
                <div className='border text-center'>None</div>
                <div className='border p-2 flex justify-center items-center hover:border-blue-600'
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    let object = {
                        "boxShadow":'3px 4px 4px '+store.shadowColor,
                    };
                    store.boxshadow = '3px 4px 4px ';
                    FindAndUpdateProperties(object);
                }}>
                    <div className='w-7 h-5 text-center bg-green-400 '
                    style={{
                        boxShadow:'2px 3px 3px gray'
                    }}></div>
                </div>

                <div className='border p-2 flex justify-center items-center hover:border-blue-600'
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    let object = {
                        "boxShadow":'3px 4px 4px inset '+store.shadowColor,
                    };
                    store.boxshadow = '3px 4px 4px inset ';
                    FindAndUpdateProperties(object);
                }}>
                    <div className='w-7 h-5 text-center bg-green-400 '
                    style={{
                        boxShadow:'2px 3px 3px gray inset'
                    }}></div>
                </div>
                <div className='border p-2 flex justify-center items-center hover:border-blue-600'
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    let object = {
                        "boxShadow":'0px 0px 10px '+store.shadowColor,
                    };
                    store.boxshadow = '0px 0px 10px ';
                    FindAndUpdateProperties(object);
                }}>
                    <div className='w-7 h-5 text-center bg-green-400 '
                    style={{
                        boxShadow:'0px 0px 5px gray'
                    }}></div>
                </div>
                <div className='border p-2 flex justify-center items-center hover:border-blue-600'
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    let object = {
                        "boxShadow":`-3px -4px 4px `+store.shadowColor,
                    };
                    store.boxshadow = `-3px -4px 4px `;
                    FindAndUpdateProperties(object);
                }}>
                    <div className='w-7 h-5 text-center bg-green-400 '
                    style={{
                        boxShadow:'2px 3px 2px gray , -2px -3px 2px gray'
                    }}></div>
                </div>
                <div className='border p-2 flex justify-center items-center hover:border-blue-600'
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    let object = {
                        "boxShadow":'4px -4px 4px '+store.shadowColor,
                    };
                    store.boxshadow = '4px -4px 4px '
                    FindAndUpdateProperties(object);
                }}>
                    <div className='w-7 h-5 text-center bg-green-400 '
                    style={{
                        boxShadow:'3px -3px 2px gray'
                    }}></div>
                </div>
            </div>
        </div>
    )
})


export const ShadowColor = observer((props: { shadowColor: string }) => {
    const [color, setcolor] = useState<string>(props.shadowColor);
    const [dialogbox, setdialogbox] = useState<boolean>(false);

    const handleChangeInProperties = (colorName:string,boxShadowproperty:{boxShadow: string}) => {
        setcolor(colorName);
        store.backgroundColorButton = colorName;
        setdialogbox(!dialogbox);
        store.shadowColor = boxShadowproperty.boxShadow;
        let object = {
            'boxShadow' : `${store.boxshadow} ${store.shadowColor}`
        }
        FindAndUpdateProperties(object);
    }
    return (
        <>
        <p>Shadow Color</p>
        <div className={`w-full p-1 border mb-3 relative ${dialogbox && 'border-red-700'}`}
        onClick={() => setdialogbox(!dialogbox)}>
            
            <div className={`w-4 h-4 ${color}`} 
            >
            {dialogbox && (
                <div className='absolute shadow-md top-8 left-1 w-full p-2 flex flex-wrap bg-white'>
                    <div className={`w-8 h-8 bg-yellow-400 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-400',{'boxShadow':'rgba(251, 191, 36,1)'})    
                    }}
                    ></div>
                    <div className={`w-8 h-8 bg-red-700 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-red-700',{'boxShadow':'rgba(185, 28, 28,1)'})    
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-blue-700 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-blue-700',{'boxShadow':'rgba(29, 78, 216,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-blue-300 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-blue-300',{'boxShadow':'rgba(147, 197, 253,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-green-500 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-green-500',{'boxShadow':'rgba(16, 185, 129,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-white relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-white',{'boxShadow':'rgba(255, 255, 255,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-black relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-black',{'boxShadow':'rgba(0, 0, 0,1)'})
                    }}
                    ></div>  
                    <div className={`w-8 h-8 bg-yellow-800 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-800',{'boxShadow':'rgba(146, 64, 14,1)'})
                    }}
                    ></div>  
                    <div className={`w-8 h-8 bg-yellow-600 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-600',{'boxShadow':'rgba(217, 119, 6,1)'})
                    }}
                    ></div>  
                </div>
                )}

            </div>
        </div>
        </>
    )
})


export const TextPlacement = observer(() => {
    return (
        <div className='w-full '>
            <p className=''>Placement</p>
            <select className='p-2 w-full border border-red-300 focus:outline-none' 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                FindAndUpdateProperties({'textAlign':e.target.value})
            }}>
                <option value='left'>Left</option>
                <option value='center'>Center</option>
                <option value='right'>Right</option>
            </select>
        </div>
    )
})


export const ToggleButton = observer((props:{keys:string;value:boolean}) => {
    const [toggle, settoggle] = useState(props.value);
    useEffect(() => {
        if(toggle !== props.value)  settoggle(props.value)
    },[props]);

    const handleDisable = (toggled:boolean) => {
        let values:boolean = toggled;
        let object = {};
        props.keys === 'autoplay' ? object={'autoplay':values} 
                    : props.keys === 'muted' ? object={'muted':values}
                    : props.keys === 'disabled' ? object={'disabled':values}
                    : props.keys === 'required' ? object={'required':values}
                    : props.keys === 'autofocus' ? object={'autofocus':values}
                    : props.keys === 'direction' ? object={'direction':values}
                    : object= {'loop':values} 
        FindAndUpdateProperties(object);
    }
    return (
        <div className='w-full flex items-center mb-3'>
            <div className='flex-1 text-md'>{props.keys}</div>
            <div className='w-10 h-4 relative rounded-xl bg-gray-300 border'
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                settoggle(!toggle);
                handleDisable(!toggle);
            }}>
                <div className={`absolute  w-5 h-4  rounded-full bg-red-400
                ${toggle && 'w-10 bg-black'} transition-all duration-300`}
                ></div>
            </div>
        </div>
    )
})

export const LabelName = (props: { name: string | null }) => {
    return (
        <p className='capitalize'>{props.name}</p>
    )
}

export const InputSrc = observer((props:{src: string}) => {
    return (
        <div className='w-full mb-3'>
            <textarea value={props.src} readOnly className='p-1 
            focus:outline-none w-full font-light border'/>
        </div>
    )
})

export const Alignment = observer(() => {
    const handleselectchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value){
            let object = {'alignment': Number(e.target.value)}
            FindAndUpdateProperties(object);
        }else{
            let object = {'alignment': Number(e.target.value)};
            FindAndUpdateProperties(object);
        }
    }
    return (
        <div className='w-full mb-3'>
            <select className='w-full text-center border p-2 focus:outline-none' onChange={handleselectchange}>
                <option value={0} className='p-1 text-center mb-1'>Left</option>
                <option value={1} className='p-1 text-center'>right</option>
            </select>
        </div>
    )
})



export const ContainerColors = observer((props:{color:string;keys:string}) => {
    const [color, setcolor] = useState<string>(props.color);
    const [dialogbox, setdialogbox] = useState<boolean>(false);

    const handleChangeInProperties = (colorName:string,background: { background: string; }) => {
        setcolor(colorName);
        let object={};
        props.keys === 'background' ? object = {'background':background.background} 
        : props.keys === 'textcolor' ? object = {'textcolor':background.background}
        : object = {'borderColor':background.background};  
        setdialogbox(!dialogbox);
        FindAndUpdateProperties(object);
    }
    return (
        <div className={`w-full p-1 border mb-3 relative ${dialogbox && 'border-red-700'}`}
        onClick={() => setdialogbox(!dialogbox)}>
            <div className={`w-4 h-4 ${color} border`}  
            >
            {dialogbox && (
                <div className='absolute shadow-md top-8 left-1 w-full z-10 p-2 flex flex-wrap bg-white pb-10'>
                    <div className={`w-8 h-8 bg-yellow-400 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-400',{'background':'rgba(251, 191, 36,1)'})    
                    }}
                    ></div>
                    <div className={`w-8 h-8 bg-red-700 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-red-700',{'background':'rgba(185, 28, 28,1)'})    
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-blue-700 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-blue-700',{'background':'rgba(29, 78, 216,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-blue-300 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-blue-300',{'background':'rgba(147, 197, 253,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-green-500 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-green-500',{'background':'rgba(16, 185, 129,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-white relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-white',{'background':'rgba(255, 255, 255,1)'})
                    }}
                    ></div> 
                    <div className={`w-8 h-8 bg-black relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-black',{'background':'rgba(0, 0, 0,1)'})
                    }}
                    ></div>  
                    <div className={`w-8 h-8 bg-yellow-800 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-800',{'background':'rgba(146, 64, 14,1)'})
                    }}
                    ></div>  
                    <div className={`w-8 h-8 bg-yellow-600 relative mr-2 mb-2 border-2 border-gray-200`}
                    onClick={() => {
                        handleChangeInProperties('bg-yellow-600',{'background':'rgba(217, 119, 6,1)'})
                    }}
                    ></div>  
                </div>
                )}

            </div>
        </div>
    )
});



export const InputTypeNumber = observer((props: { borderwidth: string;keys:string}) => {
    const [widths, setwidths] = useState(props.borderwidth);
    useEffect(() => {
        if(props.borderwidth !== widths) setwidths(props.borderwidth);
    },[props])
    return (
        <div className='w-full mb-3'>
            <input  value={widths} 
            className='p-1 border w-full focus:outline-white pl-2 outline' placeholder='enter width with px'
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
                setwidths(e.target.value)
                let object={};
                props.keys === 'borderWidth' ? object = {'borderWidth':e.target.value}
                : props.keys === 'width' ? object = {'width' : e.target.value}
                : props.keys === 'height' ? object = {'height' : e.target.value}
                : props.keys === 'xaxislabel' ? object = {'xaxislabel' : e.target.value}
                : props.keys === 'yaxislabel' ? object = {'yaxislabel': e.target.value} 
                : props.keys === 'maxchars' ? object = {'maxchars': e.target.value}
                : props.keys === 'defaultText' ? object = {'defaultText': e.target.value}
                : props.keys === 'regExp' ? object = {'regExp': e.target.value}
                : props.keys === 'valid' ? object = {'valid': e.target.value}
                : props.keys === 'errormessage' ? object = {'errormessage': e.target.value}
                : props.keys === 'placeholder' ? object = {'placeholder': e.target.value}
                : props.keys === 'label' ? object = {'label': e.target.value}
                : props.keys === 'textsize' ? object = {'textsize': e.target.value}
                : props.keys === 'minDate' ? object = {'minDate': e.target.value}
                : props.keys === 'maxDate' ? object = {'maxDate': e.target.value}
                : props.keys === 'src' ? object = {'src': e.target.value}
                : props.keys === 'allowedTypes' ? object = {'allowedTypes': e.target.value}
                : props.keys === 'maxfilesize' ? object = {'maxfilesize': e.target.value}
                : object = {'borderRadius' : e.target.value}
                FindAndUpdateProperties(object);
            }}/>
        </div>
    )
})

export const ChartObject = observer((props:{keys:string,values: any; axis:string}) => {
    const [input, setinput] = useState(props.values)
    const handleonchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setinput(e.target.value);
    }
    useEffect(() => {
        if(input !== props.values) setinput(props.values)
        if(props.axis === 'y'){
            let stringarray = props.values ? NumberToStringArray(props.values): '';
            setinput(stringarray)
        } 
    },[props])


    const handlesubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        let arr;
        if( typeof input !== 'string' ) arr = input;
        else    arr = input.split(',');
        let numberarray;
        props.axis === 'y' ?  numberarray = stringToNumberArray(arr)
        : numberarray = arr;
        if( props.keys === 'xlabel' ) FindAndUpdateProperties({'xlabel':numberarray})
        else if(props.keys === 'ydata' ) FindAndUpdateProperties({'ydata':numberarray})
    }
    return (
        <div className='w-full bg-gray-200 mb-3 p-2'>
            <p className='capitalize font-light my-2'>{props.axis }axis data</p>
            <textarea className='w-full h-16 overflow-y-scroll border p-1' 
            placeholder='Enter comma seperated values ex: 1,2,3....'
            rows={10}
            value={input}
            onChange={handleonchange}></textarea>
            <button type='submit' className='p-1 text-center w-full bg-green-300' 
            onClick={handlesubmit}>save changes</button>
        </div>
    )
})

export const InputType = observer((props:{type:string}) => {
    return (
        <div className='w-full mb-3'>
            <select className='p-2 w-full border border-red-300 focus:outline-none' 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                FindAndUpdateProperties({'type':e.target.value})
            }}>
                <option value='text' className='capitalize' >Text</option>
                <option value='number' className='capitalize'>number</option>
                <option value='email' className='capitalize'>email</option>
                <option value='password' className='capitalize'>password</option>
                <option value='number' className='capitalize'>currency</option>
                <option value='tel' className='capitalize'>phone number</option>
            </select>
        </div>
    )
})

export const FontStyle = observer((props:{keys:string;values:string}) => {
    const handlestyle = (value:string) => {
        console.log('******************',props.keys,value)
        if (props.keys === 'fontstyle' ) FindAndUpdateProperties({'fontstyle':value})
    }
    return (
        <div className='w-full flex p-2'>
            <div className='bg-black p-2 text-lg font-extrabold mr-2 text-white text-center w-12 h-12
            cursor-pointer'
            onClick={() => handlestyle('bold')}>B</div>
            <div className='bg-black p-2 text-lg font-extrabold font-italic text-white 
            text-center w-12 h-12 cursor-pointer'
            onClick={() => handlestyle('italic')}>I</div>
        </div>
    )
})

export const ObjectFit = observer(() => {
    const handleselectchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            let object = {'objectFit': e.target.value}
            FindAndUpdateProperties(object);    }
    return (
        <div className='w-full mb-3'>
            <select className='w-full text-center border p-2 focus:outline-none' onChange={handleselectchange}>
                <option value='contain' className='p-1 text-center mb-1'>contain</option>
                <option value='fill' className='p-1 text-center mb-1'>fill</option>
                <option value='cover' className='p-1 text-center'>cover</option>
            </select>
        </div>
    )
})

export const DashStyle = observer(() => {
    const handleselectchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            let object = {'borderStyle': e.target.value}
            FindAndUpdateProperties(object);    }
    return (
        <div className='w-full mb-3'>
            <select className='w-full text-center border p-2 focus:outline-none' onChange={handleselectchange}>
                <option value='solid' className='p-1 text-center mb-1'>Solid</option>
                <option value='dashed' className='p-1 text-center mb-1'>Dashed</option>
                <option value='dotted' className='p-1 text-center'>Dotted</option>
            </select>
        </div>
    )
})

export const Direction = observer((props:{direction:number}) => {
    const handleRotate = () => {
        console.log('&&&&&&&&&&&&&&%%%%%%%%%%%%%%%',props.direction);
        if(props.direction === 360){
            let object = {'direction': 90}
            FindAndUpdateProperties(object)
        }else{
            let object = {'direction': props.direction + 90};
            FindAndUpdateProperties(object);
        }
    }
    return (
        <div className='w-full mb-3'>
            <div className='text-center p-2 cursor-pointer border'
            onClick={handleRotate}>click to change direction</div>
        </div>
    )
})