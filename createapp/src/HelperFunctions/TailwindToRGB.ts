export function TailwindToRGB(tailwind:string) {
    if(tailwind === 'bg-red-700'){
        return 'rgba(185, 28, 28,1)';
    }else if(tailwind === 'bg-blue-700') return 'rgba(29, 78, 216,1)';
    else if(tailwind === 'bg-yellow-400') return 'rgba(251, 191, 36,1)';
    else if(tailwind === 'bg-blue-300') return 'rgba(147, 197, 253,1)';
    else if(tailwind === 'bg-green-500') return 'rgba(16, 185, 129,1)';
    else if(tailwind === 'bg-white') return 'rgba(255, 255, 255,1)';
    else if(tailwind === 'bg-black') return 'rgba(0, 0, 0,1)';
    else if(tailwind === 'bg-yellow-800') return 'rgba(146, 64, 14,1)';
    else if(tailwind === 'bg-yellow-600') return 'rgba(217, 119, 6,1)';
    else return tailwind;
}