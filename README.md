Next Study
===================================

### SSR에 대해 공부하고 Next에 익숙해지는 것을 목적으로 합니다.

### installation
npx create-next-app

### start
npm run dev        
         
            
### 9/20일 : Next에서의 라우팅
Next.js는 기본적으로 pages 폴더의 구조를 기반으로 라우팅을 제공해준다.        
        
Ex)       
pages/index.js  ===> localhost:3000         
pages/info.js ===> localhost:3000/info        
pages/about/index.js ===> localhost:3000/about       
pages/about/age.js ===> localhost:3000/about/age     

사용)     
/* 
    메인 페이지로 이동 예시         

    import Link from 'next/Link'        
    
    <Link href='/'>        
        <button>home</button>         
    </Link>  
*/         
           
또한 functional 컴포넌트에서 state를 사용할 때 import useState를 할 필요가 없다. 이미 되어 있다.
구지 react-router-dom을 사용하지 않고도 라우팅을 할 수 있다는 것이 굉장히 편하다.           