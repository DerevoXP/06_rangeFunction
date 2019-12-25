function range(n, m=0, k=0){
    let a=[];
    if (m==0){
        for (let i=m; i<n; i++){
            a.push(i);
        }
    }else if(k==0){
        for (let i=n; i<m; i++){
        a.push(i);
        }
    }else{  
        let count=0;     
        for (let i=n; i<m; i++){               
            if (count%k==0){
                count++;
                a.push(i);
            }else{
                count++;
            }
        }
    }
    return a;
}