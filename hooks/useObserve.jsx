import {useEffect, useState} from "react";


const useObserve = (refs, options={}) =>{
    const [isInView, setIsInView] = useState(()=> refs.map(()=>false));

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry, index)=>{
                setIsInView((prev)=>{
                    const newState = [...prev];
                    if (entry.isIntersecting){
                        newState[index] = true;
                    }
                    return newState;
                });
            });
        }, options);

        refs.forEach((ref)=>{
            if (ref.current){
                observer.observe(ref.current);
            }
        });

        return ()=>{
            refs.forEach((ref)=>{
                if (ref.current){
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs, options]);

    return isInView;
};

export default useObserve;