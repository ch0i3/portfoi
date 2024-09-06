window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const rotateX = scrollTop * 0.1;
    const rotateY = scrollTop * 0.2;
    const rotateZ = scrollTop * 0.3;
    
    /* 메뉴 색상 */
    const navLinks = document.querySelectorAll('navb ul li a');
    const navcLinks = document.querySelectorAll('navc ul li a');

    /* 큐브 뒤 글자 화면표기 변경*/
    const firsttext = document.getElementById('firsttext');
    const backtext = document.getElementById('backtext');
    const left1text = document.getElementById('left1text');
    const righttext = document.getElementById('righttext');
    const endtext = document.getElementById('endtext');

    const textElement = document.getElementById('stext');

    const cube = document.getElementById('cube');
    /*큐브의 회전 값을 조정.*/
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    

    const faces = document.querySelectorAll('.cube__face');

    
    if (scrollTop < 400) {
        faces.forEach(face => face.style.background = 'linear-gradient(45deg, #F6F6F6, #D3D3D3)');
        document.body.style.backgroundColor = '#000000';
        //화면 표시할 부분 설정
        firsttext.style.display = 'block';
        backtext.style.display = 'none';
        left1text.style.display = 'none';
        righttext.style.display = 'none';
        endtext.style.display = 'none';
      
        // 상단 메뉴 색상 설정
        navLinks.forEach(link => link.style.color = '#ffffff');
        navcLinks.forEach(link => link.style.color = '#ffffff');
        
    } else if (scrollTop >= 400 && scrollTop < 800) {
        faces.forEach(face => face.style.background = 'linear-gradient(45deg,#031051,#A2A2A2)');
        document.body.style.backgroundColor = '#ffffff';
        firsttext.style.display = 'none';
        backtext.style.display = 'block';
        
        navLinks.forEach(link => link.style.color = '#000000');
        navcLinks.forEach(link => link.style.color = '#000000');
        left1text.style.display = 'none';
        righttext.style.display = 'none';
        endtext.style.display = 'none';
        
    } else if (scrollTop >= 800 && scrollTop < 1200) {
        faces.forEach(face => face.style.background = 'linear-gradient(45deg, #00063A, #0C9AF2)');
        document.body.style.backgroundColor = '#FFD129';
        firsttext.style.display = 'none';
        backtext.style.display = 'none';
        left1text.style.display = 'block';
        righttext.style.display = 'none';
        endtext.style.display = 'none';
       
        navLinks.forEach(link => link.style.color = '#000000');
        navcLinks.forEach(link => link.style.color = '#000000');

      
          

    } else if (scrollTop >= 1200 && scrollTop < 1700) {
        faces.forEach(face => face.style.background = 'linear-gradient(45deg, #FF3D00, #FFB629)');
        document.body.style.backgroundColor = '#316244';
        firsttext.style.display = 'none';
        backtext.style.display = 'none';
        left1text.style.display = 'none';
        righttext.style.display = 'block';
        endtext.style.display = 'none';
        
        navLinks.forEach(link => link.style.color = '#ffffff');
        navcLinks.forEach(link => link.style.color = '#ffffff');
       
    } else {
        faces.forEach(face => face.style.background = 'linear-gradient(45deg, #B987FF, #D5FFBD)');
        document.body.style.backgroundColor = '#000';
        firsttext.style.display = 'none';
        backtext.style.display = 'none';
        left1text.style.display = 'none';
        righttext.style.display = 'none';
        endtext.style.display = 'block';
      
        navLinks.forEach(link => link.style.color = '#ffffff');
        navcLinks.forEach(link => link.style.color = '#ffffff');
       
    }

    
});


