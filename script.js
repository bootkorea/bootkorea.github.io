document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const mainContainer = document.getElementById("main-container");
  const progressBarFill = document.getElementById("progress-fill");
  const loadingPercentage = document.querySelector(".loading-percentage");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    if (progress > 100) {
      progress = 100;
    }
    progressBarFill.style.width = `${progress}%`;
    loadingPercentage.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add("loaded");
        mainContainer.classList.remove("hidden");
      }, 500);
    }
  }, 100);

  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link");
  const pageSections = document.querySelectorAll(".page-section");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const logoHome = document.getElementById("logo-home");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";
    pageSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 90) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  logoHome.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      projectCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // --- Modal Functionality ---
  const portfolioModal = document.getElementById("portfolio-modal");
  const closeButton = document.querySelector(".close-button");
  const modalBody = document.getElementById("modal-body");

  const modalData = {
    "flood-dashboard-modal": {
        title: "디지털 트윈 기반 도시침수 스마트 대응 시스템",
        content: `
            <p>실시간 강우 데이터와 디지털 트윈 기술을 활용하여 도시 침수 위험을 예측하고 시각화하는 대시보드 개발 프로젝트입니다.</p>
            <p><strong>주요 역할:</strong> PM, AI 모델링, 백엔드 개발</p>
             <div class="tech-stack" style="margin-top: 1rem;">
                <span class="stack-item">Python</span>
                <span class="stack-item">React</span>
                <span class="stack-item">UNET</span>
                <span class="stack-item">AWS</span>
            </div>
            <a href="https://github.com/AIVLE-AI-26/flood-dashboard" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">GitHub에서 보기</a>
        `
    },
    "k-detect-modal": {
        title: "K-Detect: 교내 전동 킥보드 불법 이용 사례 탐지 및 개선 솔루션",
        content: `
            <p>교내 CCTV를 활용하여 헬멧 미착용, 2인 탑승 등 전동 킥보드의 불법 이용 사례를 실시간으로 탐지하는 AI 솔루션입니다.</p>
            <p><strong>주요 역할:</strong> PM, AI 모델링</p>
             <div class="tech-stack" style="margin-top: 1rem;">
                <span class="stack-item">Python</span>
                <span class="stack-item">YOLOv8</span>
                <span class="stack-item">PyQt5</span>
            </div>
            <a href="https://github.com/bootkorea/K-Detect" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">GitHub에서 보기</a>
        `
    },
    "take-a-seat-modal": {
        title: "Take-A-Seat: AI 안면 인식 기능을 활용한 '자동 출석 확인' 웹서비스",
        content: `
            <p>강의실에 설치된 카메라로 학생들의 얼굴을 인식하여 출석을 자동으로 처리하고, 관리 페이지에서 출결 현황을 시각화하는 웹서비스입니다.</p>
            <p><strong>주요 역할:</strong> PM, 백엔드 개발</p>
             <div class="tech-stack" style="margin-top: 1rem;">
                <span class="stack-item">Python</span>
                <span class="stack-item">Django</span>
                <span class="stack-item">OpenCV</span>
                <span class="stack-item">AWS</span>
            </div>
            <a href="https://github.com/bootkorea/Take-A-Seat" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">GitHub에서 보기</a>
        `
    },
    "litmus-modal": {
        title: "SW교육 플랫폼(Litmus) 리뉴얼 프로젝트",
        content: `
            <p>전북대학교 SW교육 플랫폼 'Litmus'의 보안 위협 및 기술 노후화로 인한 서비스 중단에 대응하여 수행한 외주 프로젝트입니다.</p>
            <p><strong>참여 기관:</strong> 전북대학교, 전북대 SW중심대학사업단</p>
            <div class="tech-stack" style="margin-top: 1rem;">
                <span class="stack-item">Python</span>
                <span class="stack-item">Django</span>
                <span class="stack-item">OpenStack</span>
                <span class="stack-item">MySQL</span>
            </div>
            <a href="https://litmus.jbnu.ac.kr/" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">사이트 방문</a>
        `
    },
     "lx-modal": {
        title: "고정밀 영상을 활용한 소하천 불법 점용 탐지 기법 개발",
        content: `
            <p>하천 부지의 불법 점유·점용을 빠르게 탐지하는 최초의 SW 기법 개발 프로젝트입니다.</p>
            <p><strong>참여 기관:</strong> 한국국토정보공사(LX)</p>
             <div class="tech-stack" style="margin-top: 1rem;">
                <span class="stack-item">Python</span>
                <span class="stack-item">PyTorch</span>
                <span class="stack-item">W&B</span>
            </div>
            <a href="https://github.com/bootkorea/JBNU_Capstone-2023" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">GitHub에서 보기</a>
        `
    },
    "pnid-modal": {
        title: "디지털 P&ID 인식 성능 향상",
        content: `
            <p>Visual Computing Lab@JBNU 소속으로 수행한 산학협력 프로젝트입니다.</p>
            <p><strong>참여 기관:</strong> 현대엔지니어링, 고려대학교 外</p>
            <div class="tech-stack" style="margin-top: 1rem;">
                <span class="stack-item">Python</span>
                <span class="stack-item">PyTorch</span>
                <span class="stack-item">W&B</span>
            </div>
            <a href="https://github.com/bootkorea/PNID_big_symbol" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">GitHub에서 보기</a>
        `
    },
    "kcc2025-modal": {
        title: "SW 교육을 위한 자동 과제 채점 시스템의 설계 및 실제 운영 사례 소개 및 고찰",
        content: `
            <p><strong>학술대회:</strong> 2025 한국컴퓨터종합학술대회 (KCC2025)</p>
            <p><strong>저자 구분:</strong> 3저자</p>
            <p><strong>지도교수:</strong> 박현찬 (전북대학교)</p>
            <hr>
            <h4>핵심 기여</h4>
            <ul>
                <li><strong>기술:</strong> 오픈소스 기반 교육용 자동 채점 시스템 설계 및 개발 방법론 도출</li>
                <li><strong>교육:</strong> 실제 운영 데이터를 통한 효과적인 SW 교육 플랫폼 운영 방안 제안</li>
                <li><strong>실무:</strong> 교육기관 대상 효율적인 시스템 구축 가이드라인 제시</li>
            </ul>
            <hr>
            <h4>논문 요약</h4>
            <p>대학에서 운영 중인 자동 채점 시스템의 리뉴얼 및 실제 운영 사례를 중심으로, 교육용 프로그래밍 채점 플랫폼의 설계와 운영에서 고려해야 할 요소들을 분석합니다. 기존 시스템의 노후화와 사용성 문제를 해결하기 위해 오픈소스 기반으로 리뉴얼을 진행하였으며, 사용자 권한 구조, 과제 운영 정책, UI 설계 등의 관점에서 주요 기능을 구성하였습니다. 리뉴얼 이후의 운영 사례를 통해 기능 중심 개발의 한계, 사용자 요구와 시스템 목적 간의 충돌, 사용자 경험의 다양성 등을 확인할 수 있었습니다. 이를 바탕으로 향후 개선 방향과 운영 철학을 제시하며, 유사한 교육 플랫폼의 설계 및 운영에 실질적인 시사점을 제공하고자 합니다.</p>
        `
    },
    "vclab-modal": {
        title: "VCLab@JBNU (Prof. Hyung-ki Kim)",
        content: `
            <p><strong>기간:</strong> 2022.10 ~ 2023.09</p>
            <p><strong>역할:</strong> 학부생 연구원</p>
            <p><strong>분야:</strong> Deep Learning, Computer Vision</p>
            <hr>
            <p>현대엔지니어링, 고려대학교 등과 산학협력 프로젝트에 참여하여 P&ID 내 심볼 검출 모델의 성능 개선 연구를 수행했습니다.</p>
        `
    },
    "alps-modal": {
        title: "전북대학교 알고리즘 동아리 (ALPS@JBNU)",
        content: `
            <p><strong>역할:</strong> 부회장(2022), Core Member(2023 ‐ 2024)</p>
            <hr>
            <ul>
                <li>단계별 스터디 시스템 기획 및 도입 (<a href="https://github.com/alps-jbnu/22ALPStudy" target="_blank" rel="noopener">GitHub Link</a>)</li>
                <li>교내외 Problem Solving 대회 참여 및 운영 지원 (2건의 수상 기록)</li>
                <li>2024 JBNUPC(JBNU Programming Contest) 주관 및 운영</li>
                <li>신입생 대상 C언어 스터디 진행</li>
            </ul>
        `
    },
    "hackathon-modal": {
        title: "Global Hackathons",
        content: `
            <h4>Junction Asia 2025</h4>
            <p>Junction, Microsoft, Upstage 등에서 주관하는 아시아 최대 규모의 해커톤입니다.</p>
            <ul>
                <li><strong>주제:</strong> (추후 업데이트 예정)</li>
                <li><strong>설명:</strong> (추후 업데이트 예정) <a href="#" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><strong>데모 영상:</strong> (추후 업데이트 예정)</li>
            </ul>
            <hr>
            <br>
            <h4>HackSeoul 2024</h4>
            <p>AngelHack, Coupang에서 주관하는 해커톤으로, <strong>Final 라운드에 진출</strong>했습니다.</p>
            <ul>
                <li><strong>주제:</strong> (추후 업데이트 예정)</li>
                <li><strong>설명:</strong> (추후 업데이트 예정) <a href="#" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><strong>데모 영상:</strong> (추후 업데이트 예정)</li>
            </ul>
        `
    }
  };

  document.querySelectorAll('.project-card, .activity-item').forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.dataset.modalTarget;
        if (targetId && modalData[targetId]) {
            const data = modalData[targetId];
            modalBody.innerHTML = `<h3>${data.title}</h3>${data.content}`;
            portfolioModal.style.display = 'block';
        }
    });
  });

  closeButton.addEventListener("click", () => {
    portfolioModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === portfolioModal) {
      portfolioModal.style.display = "none";
    }
  });
});