export function randomColors(){
    const r:number = Math.random()*256|0;
    const g:number = Math.random()*256|0;
    const b:number = Math.random()*256|0;
    console.log('rgb',r,g,b,`rgba(${r},${g},${b},0.3)`);
    return (`rgba(${r},${g},${b},0.3)`);

}