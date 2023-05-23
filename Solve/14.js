var longestCommonPrefix = function(strs) {
    let prefix = '';
    
      strs.forEach((str,index)=>{  
        if(index>0){
          let pattern = ''
          for (let i=0; i<str.length; i++) {
            if(str[i]===prefix[i]) pattern = pattern+str[i]
            else break;
          }

          pattern.length>0? prefix = pattern : prefix = 0
          
        }
        else prefix = str;
      })
    
    return prefix.length;
  };
  
  console.log(longestCommonPrefix(["flower","flow","flight"]))