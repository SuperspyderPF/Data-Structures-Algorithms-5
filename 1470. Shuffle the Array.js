shuffle=(x,n)=>x.slice(0,n).flatMap((v,i)=>[v,x[n+i]])