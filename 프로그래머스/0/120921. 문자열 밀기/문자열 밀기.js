function solution(A, B) {
    var a = [...A];
    if ( A == B ) {
        return 0
    }
    else( A !== B) 
        for(let i = 0; i < A.length; i++) {
            var save = a[a.length - 1]; // e / l
            console.log(a);  
            a.pop(); // appl / eapp
            var string = save + a.join(''); // eappl / leapp
            a = [...string];
            console.log(string);
            if(string == B) {
                return i + 1;
            }
            
        }
        return -1
    
    
    
}