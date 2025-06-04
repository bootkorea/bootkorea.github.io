// 프리로더 및 페이지 전환 기능
class PortfolioApp {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.mainContainer = document.getElementById('main-container');
        this.progressFill = document.getElementById('progress-fill');
        this.loadingPercentage = document.querySelector('.loading-percentage');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.pageButtons = document.querySelectorAll('[data-page]');
        this.pages = document.querySelectorAll('.page-section');
        
        this.init();
    }

    init() {
        this.startPreloader();
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupContactForm();
    }

    // 프리로더 시작[2][12][13][18]
    startPreloader() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => this.finishPreloader(), 500);
            }
            
            this.progressFill.style.width = `${progress}%`;
            this.loadingPercentage.textContent = `${Math.round(progress)}%`;
        }, 200);
    }

    // 프리로더 완료 처리
    finishPreloader() {
        this.preloader.classList.add('loaded');
        this.mainContainer.classList.remove('hidden');
        
        setTimeout(() => {
            this.preloader.style.display = 'none';
        }, 500);
    }

    // 네비게이션 설정[7][8]
    setupNavigation() {
        // 네비게이션 링크 클릭 이벤트
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.dataset.page;
                this.switchPage(targetPage);
                this.setActiveNav(link);
            });
        });

        // 페이지 전환 버튼 클릭 이벤트
        this.pageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.dataset.page) {
                    e.preventDefault();
                    const targetPage = button.dataset.page;
                    this.switchPage(targetPage);
                    this.setActiveNavByPage(targetPage);
                }
            });
        });
    }

    // 페이지 전환
    switchPage(targetPage) {
        // 모든 페이지 숨기기
        this.pages.forEach(page => {
            page.classList.remove('active');
        });

        // 대상 페이지 표시
        const targetPageElement = document.getElementById(`${targetPage}-page`);
        if (targetPageElement) {
            targetPageElement.classList.add('active');
        }

        // 스크롤을 맨 위로
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 활성 네비게이션 설정
    setActiveNav(activeLink) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    // 페이지별 활성 네비게이션 설정
    setActiveNavByPage(targetPage) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === targetPage) {
                link.classList.add('active');
            }
        });
    }


    // 모바일 메뉴 설정[11]
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // 모바일에서 메뉴 항목 클릭 시 메뉴 닫기
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    // 연락처 폼 설정
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // 폼 데이터 수집
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());
                
                // 여기서 실제 폼 제출 처리를 할 수 있습니다
                console.log('Contact form submitted:', data);
                alert('메시지가 성공적으로 전송되었습니다!');
                contactForm.reset();
            });
        }
    }
}

// 포트폴리오 필터 기능
class PortfolioFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                this.filterPortfolio(filter);
                this.setActiveFilter(button);
            });
        });
    }

    filterPortfolio(filter) {
        this.portfolioItems.forEach(item => {
            const category = item.dataset.category;
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    }

    setActiveFilter(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// 스킬 바 애니메이션
class SkillsAnimation {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.init();
    }

    init() {
        // Intersection Observer를 사용하여 스킬 섹션이 보일 때 애니메이션 시작
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkills();
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.querySelector('#resume-page');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    animateSkills() {
        this.skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'scaleX(1)';
                bar.style.transformOrigin = 'left';
            }, index * 200);
        });
    }
}

// 부드러운 스크롤 효과
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // 부드러운 스크롤을 위한 CSS 추가
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// DOM 로드 완료 시 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    new PortfolioFilter();
    new SkillsAnimation();
    new SmoothScroll();

    // bootkorea 로고 클릭 시 홈으로 이동
    const logoHome = document.getElementById('logo-home');
    if (logoHome) {
        logoHome.style.cursor = 'pointer';
        logoHome.addEventListener('click', (e) => {
            e.preventDefault();

            // 페이지 전환 함수가 있다면 사용 (예: switchPage('intro'))
            if (typeof app !== 'undefined' && typeof app.switchPage === 'function') {
                app.switchPage('intro');
                app.setActiveNavByPage('intro');
            } else {
                // 기본 수동 처리
                document.querySelectorAll('.page-section').forEach(page => {
                    page.classList.remove('active');
                });
                const introPage = document.getElementById('intro-page');
                if (introPage) introPage.classList.add('active');

                // 네비게이션 active 처리
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.page === 'intro') link.classList.add('active');
                });

                // 스크롤 맨 위로
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
});

// 브라우저 리사이즈 이벤트 처리
window.addEventListener('resize', () => {
    // 리사이즈 시 필요한 처리
    const header = document.querySelector('.header');
    if (header) {
        header.style.transition = 'none';
        setTimeout(() => {
            header.style.transition = 'var(--transition)';
        }, 100);
    }
});

// 스크롤 이벤트 처리 (헤더 배경 변경)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// 기술 레이더 차트 초기화
const skillData = {
    labels: ['Python', 'Django', 'AWS', 'PyTorch', 'SQL'],
    datasets: [{
        label: '기술 숙련도',
        data: [90, 85, 80, 75, 70],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointRadius: 5
    }]
};

new Chart(document.getElementById('skillRadarChart'), {
    type: 'radar',
    data: skillData,
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
                    color: '#666'
                }
            }
        }
    }
});

// 4. 유효성 검사 및 이메일 전송 함수 추가
function validateAndSendEmail(event) {
    event.preventDefault();
    
    // 필드 값 가져오기
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // 필수 필드 검사
    if (!name) {
        alert('이름을 입력해주세요.');
        document.getElementById('name').focus();
        return false;
    }
    
    if (!email) {
        alert('이메일을 입력해주세요.');
        document.getElementById('email').focus();
        return false;
    }
    
    if (!subject) {
        alert('제목을 입력해주세요.');
        document.getElementById('subject').focus();
        return false;
    }
    
    if (!message) {
        alert('메시지를 입력해주세요.');
        document.getElementById('message').focus();
        return false;
    }
    
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        document.getElementById('email').focus();
        return false;
    }
    
    // mailto 링크 생성 및 실행
    const mailtoSubject = encodeURIComponent(`[포트폴리오 문의] ${subject}`);
    const mailtoBody = encodeURIComponent(
        `보낸 사람: ${name}\n` +
        `이메일: ${email}\n` +
        `제목: ${subject}\n\n` +
        `메시지:\n${message}\n\n` +
        `---\n` +
        `이 메시지는 포트폴리오 웹사이트에서 전송되었습니다.`
    );
    
    const mailtoLink = `mailto:alphasobs@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // 메일 클라이언트 열기
    window.location.href = mailtoLink;
    
    // 성공 메시지 표시
    alert('메일 클라이언트가 열렸습니다. 메시지를 확인하고 전송해주세요.');
    
    // 폼 초기화
    document.getElementById('contact-form').reset();
    
    return true;
}