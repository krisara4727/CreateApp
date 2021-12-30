import { toJS } from 'mobx';
import React from 'react'
import {Alignment, BorderRadius, BoxShadow, ButtonVariant, ChartObject, ContainerColors, DashStyle, Direction, Disable, FontStyle, General, InputSrc, InputType, Label, LabelName, ObjectFit, ShadowColor, TextPlacement, ToggleButton } from '../../Dynamics';
import {Colors, InputTypeNumber} from '../../Dynamics';
import { GetItemById } from '../../HelperFunctions/GetItemById';

export function Button(props: { id: number; }) {
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name='button' />
            <Label labelname={item && item.element}/>
            <Disable />
            <General name='styles' />
            <Colors color={item && item.background} /> 
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <ButtonVariant />
            <BorderRadius />
            <BoxShadow />
            <ShadowColor shadowColor={item && item.shadowColor} />
            <TextPlacement />
        </div>
    )
}

export function Audio(props: { id: number; }) {
    const item = GetItemById(props.id);
    return(
        <div className='w-full'>
            <General name={item && item.element} />
            <Label labelname={item && item.data} />
            <LabelName name='url' />
            <InputSrc src={item && item.src}/>
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <ToggleButton keys='autoplay' value={item && item.autoplay} />
            <ToggleButton keys='muted' value={item && item.muted} />
            <ToggleButton keys='loop' value={item && item.loop} />
        </div>
    )
}


export function Checkbox(props:{id:number;}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <Label labelname={item && item.label} />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <Alignment />
        </div>
    )
}


export function Container(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name='container' />
            <General name='styles' />
            <LabelName name='background color' />
            <ContainerColors color={item && item.background} keys='background' />
            <LabelName name='border color' />
            <ContainerColors color={item && item.background} keys='borderColor' />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='border width' /> 
            <InputTypeNumber borderwidth={item && item.borderWidth} keys='borderWidth' />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='border radius' />
            <InputTypeNumber borderwidth={item && item.borderRadius} keys='borderRadius' />
            <BorderRadius />
            <BoxShadow />
            <ShadowColor shadowColor={item && item.shadowColor} />
        </div>
    )
}


export function Chart(props:{id:number}){
    const item = GetItemById(props.id);
    return(
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            {/* <LabelName name='title' /> */}
            <Label labelname={item && item.data}/>
            <ChartObject keys='xlabel' values={item && item.xlabel} axis='x' />
            <ChartObject keys='ydata' values={item && item.ydata} axis='y' />
            <General name='axis' />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='x-axis label' />
            <InputTypeNumber borderwidth={item && item.xaxislabel} keys='xaxislabel' />
            <LabelName name='y-axis label' />
            <InputTypeNumber borderwidth={item && item.yaxislabel} keys='yaxislabel' />
            
        </div>
    )
}

export function Input(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <LabelName name='Input type' />
            <InputType type={item && item.type} />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='Max characters' />
            <InputTypeNumber borderwidth={item && item.maxchars} keys='maxchars' />
            <LabelName name='Default text' />
            <InputTypeNumber borderwidth={item && item.defaultText} keys='defaultText' />
            <LabelName name='Reg Exp' />
            <InputTypeNumber borderwidth={item && item.regExp} keys='regExp' />
            <LabelName name='valid' />
            <InputTypeNumber borderwidth={item && item.valid} keys='valid' />
            <LabelName name='Error message' />
            <InputTypeNumber borderwidth={item && item.errormessage} keys='errormessage' />
            <LabelName name='placeholder' />
            <InputTypeNumber borderwidth={item && item.placeholder} keys='placeholder' />
            <LabelName name='label' />
            <InputTypeNumber borderwidth={item && item.label} keys='label' />
            <ToggleButton keys='required' value={item && item.required} />
            <ToggleButton keys='disabled' value={item && item.disabled} />
            <ToggleButton keys='autofocus' value={item && item.autofocus} />
            <General name='label styles' />
            <LabelName name='text color' />
            <ContainerColors keys='textcolor' color={item && item.textcolor} />
            <LabelName name='text size' />
            <InputTypeNumber keys='textsize' borderwidth={item && item.textsize} />
            <LabelName name='text style' />
            <FontStyle keys='fontstyle' values={item && item.fontstyle} />
        </div>
    )
}

export function Text(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <Label labelname={item && item.data} />
            <General name='styles' />
            <LabelName name='cell background' />
            <ContainerColors keys='background' color={item && item.background} />
            <LabelName name='text color' />
            <ContainerColors keys='textcolor' color={item && item.textcolor} />
            <LabelName name='border color' />
            <ContainerColors keys='borderColor' color={item && item.borderColor} />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='border width' /> 
            <InputTypeNumber borderwidth={item && item.borderWidth} keys='borderWidth' />
            <LabelName name='text size' />
            <InputTypeNumber keys='textsize' borderwidth={item && item.textsize} />
            <LabelName name='text style' />
            <FontStyle keys='fontstyle' values={item && item.fontstyle} />
            <TextPlacement />

        </div>
    )
}

export function Date(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <Label labelname={item && item.data} />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='min date' />
            <InputTypeNumber borderwidth={item && item.minDate} keys='minDate' />
            <LabelName name='max date' />
            <InputTypeNumber borderwidth={item && item.maxDate} keys='maxDate' />
        </div>
    )
}


export function Image(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <Label labelname={item && item.data} />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='image src' />
            <InputSrc src={item && item.src} />
            <LabelName name='object fit' />
            <ObjectFit />
        </div>
    )
}

export function Divider(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <Direction direction={item && item.direction} />
            <General name='styles' />
            <LabelName name='width' />
            <InputTypeNumber keys='width' borderwidth={item && item.width} />
            <LabelName name='height' />
            <InputTypeNumber keys='height' borderwidth={item && item.height} />
            <LabelName name='dash style' />
            <DashStyle />
            <LabelName name='divider color' />
            <ContainerColors keys='background' color={item && item.background} />
        </div>
    )
}
export function SelectFile(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <Label labelname={item && item.data} />
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <LabelName name='max no. files' />
            <InputTypeNumber keys='maxfilesize' borderwidth={item && item.maxfilesize} />
            <LabelName name='allowed file types' />
            <InputTypeNumber keys='allowedTypes' borderwidth={item && item.allowedTypes} />
            <ToggleButton keys='required' value={item && item.required} />
            <ToggleButton keys='disabled' value={item && item.disabled} />
        </div>
    )
}

export function Video(props:{id:number}){
    const item = GetItemById(props.id);
    return (
        <div className='w-full'>
            <General name={item && item.element} />
            <General name='General' />
            <InputSrc src={item && item.src}/>
            <LabelName name='width' />
            <InputTypeNumber borderwidth={item && item.width} keys='width' />
            <LabelName name='height' />
            <InputTypeNumber borderwidth={item && item.height} keys='height' />
            <ToggleButton keys='autoplay' value={item && item.autoplay} />
        </div>
    )
}