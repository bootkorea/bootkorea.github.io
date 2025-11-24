export const content = {
  kr: {
    hero: {
      greeting: "Hello, I'm",
      title: "bootkorea.",
      subtitle: "Software Engineer & Product Manager.",
      description: "기술적 깊이와 비즈니스 가치를 연결하여 임팩트를 만듭니다.\n사용자 중심의 사고로 복잡한 문제를 해결하는 엔지니어이자 기획자입니다.",
      cta: "프로젝트 보기"
    },
    about: {
      title: "About Me",
      intro: [
        "안녕하세요! 저는 **Software Engineer**이자 **Product Manager**인 **소부승**입니다.",
        "컴퓨터 공학에 대한 깊이 있는 이해를 바탕으로, **기술적 실현 가능성**과 **사용자 니즈** 사이의 균형을 맞추는 데 탁월합니다. 학부 시절 Computer Vision 연구부터 클라우드 서비스 기획, 풀스택 개발에 이르기까지 폭넓은 경험을 쌓아왔습니다.",
        "현재는 **LLM**과 **클라우드 기술**을 활용하여 실질적인 가치를 창출하는 프로덕트를 만드는 데 집중하고 있습니다."
      ],
      tabs: {
        experience: "Experience",
        education: "Education",
        activities: "Activities",
        certs: "Certifications",
        awards: "Awards"
      },
      experience: [
        {
          title: 'Product Manager (Internship)',
          company: 'NAVER Cloud',
          period: '2025.07 ~ 재직중',
          description: [
            '**AI Synergy Planning / LLM 솔루션(CLOVA Studio) PM**',
            '신규 추론 모델(HCX-007)의 Identify, Hidden Prompt Leaking 및 응답 언어 변환 이슈 해결을 위한 리서치 및 프롬프트 엔지니어링 수행',
            '경쟁사 UI/UX 분석, 산업 동향 리서치 및 벤치마크 보고서 피칭',
            '신규 서비스(MultiLLM 플랫폼) 기획: 도입 OSS 모델 선정, 모니터링 도구 기획(PRD, 화면 설계서), OpenAI Compatible API 리서치',
            '추론(Reasoning) 모델 관련 서비스 Cookbook 4건 제작 및 CS 대응을 위한 1선 가이드/문서화 작업 수행'
          ],
          tags: ['Product Management', 'LLM', 'Prompt Engineering', 'CLOVA Studio', 'Market Research']
        },
        {
          title: 'Cloud Service Planner & PM (Internship)',
          company: 'GABIA',
          period: '2025.03 ~ 2025.05',
          description: [
            '**클라우드기획팀 / Gabia Cloud Gen2 서비스 기획**',
            'OpenStack API 기반 신규 기능(오토 스케일링, 서버 이미징) 기획 및 산출물(PRD, 화면 설계서) 제작',
            'QA 테스트 수행 및 서비스 개선안 30건 이상 제안 (7건 실반영)',
            '사용자 피드백 기반 UI/UX 개선안 제안 및 DB 보안 솔루션/IPS 사용자 매뉴얼 작성',
            'My가비아 대시보드 및 마켓플레이스 기능 기획'
          ],
          tags: ['Cloud Planning', 'OpenStack', 'UI/UX', 'QA', 'Documentation']
        },
        {
          title: 'Litmus Platform Renewal Project',
          company: '전북대학교 SW중심대학사업단',
          period: '2024.04 ~ 2024.08',
          description: [
            '**팀장 (기여도 40%) / Backend Lead & PM**',
            '기존 온프레미스 시스템을 클라우드 기반 SaaS로 전환하여 디지털 전환(DX) 달성',
            'SW 교육 특화 기능 백엔드 개발 및 OpenStack 인프라 설계/구축',
            '개발-비즈니스 조직 간 커뮤니케이션 주도 및 제품 로드맵 설계',
            '600명 이상의 사용자에게 안정적인 서비스 제공 중'
          ],
          tags: ['Backend', 'Django', 'OpenStack', 'SaaS', 'PM']
        }
      ],
      education: [
        {
          title: '전북대학교',
          degree: '컴퓨터공학부 학사',
          period: '2019.03 - 2025.02',
          description: ['학점 3.79/4.5 (131학점)', '주요 과목: 운영체제(A+), 인공지능(A+), 클라우드 컴퓨팅(A+)']
        },
        {
          title: 'KT AIVLE School 5th - AI Track',
          degree: 'KT',
          period: '2024.02 - 2024.08',
          description: ['Dean\'s List (상위 5% 우수 교육생)', '빅프로젝트 실무상 수상', '데이터 분석/AI 모델링 및 실무 연계 프로젝트 수행']
        }
      ],
      activities: [
        {
          title: '전북대 알고리즘 동아리 ALPS',
          role: '부회장(2022), Core Member',
          period: '2021.12 ~ 2024.12',
          description: [
            '신입생/재학생 대상 단계별 알고리즘 교육 시스템 기획 및 스터디 리딩',
            '교내 알고리즘 경시대회(JBNUPC) 주관 및 운영',
            '교내외 PS 경시대회 출전 및 입상, 신입생 C++ 멘토링 진행'
          ]
        },
        {
          title: 'VCLab (Visual Computing Lab)',
          role: '학부생 연구원',
          period: '2022.10 ~ 2023.09',
          description: [
            'Computer Vision, Deep Learning 연구 수행',
            '산학협력 과제 참여: 디지털 P&ID 인식 성능 향상 (현대엔지니어링 등)',
            '2D Image Object Detection 모델 설계 및 Fine-Tuning, 데이터 증강 기법 개발'
          ]
        },
        {
          title: '전북대학교 컴퓨터인공지능학부 학생회',
          role: '기획부장, 부학생회장',
          period: '2022.12 ~ 2023.11',
          description: [
            '노후 시설 개선 프로젝트(무한상상실 등) 기획 및 예산 확보',
            '학부 통합에 따른 신규 학칙 수립 및 소통 시스템 구축',
            'SW 경진대회(해커톤, AI 경진대회 등) 3건 기획 및 운영'
          ]
        }
      ],
      certs: [
        {
          title: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: '2025.04'
        },
        {
          title: 'SQL Developer (SQLD)',
          issuer: 'K-Data',
          date: '2024.04'
        },
        {
          title: 'TOPCIT Level 3',
          issuer: 'IITP',
          date: '2023.10'
        }
      ],
      awards: [
        {
          title: '2024 컴퓨터인공지능학부 작품경진대회 대상',
          issuer: '전북대학교',
          date: '2024.12',
          description: ["'Flow: 택배 포장재 재활용을 위한 SW 솔루션' 기획 및 백엔드 개발"]
        },
        {
          title: '2024 인공지능 온라인 경진대회 금상',
          issuer: '전북대학교 SW중심대학사업단',
          date: '2024.06',
          description: ["가짜 음성 탐지 AI 모델 개발 (교내 Kaggle 2위, 전국 본선 진출)", "CNN-biLSTM 앙상블 모델 개발 및 파인튜닝"]
        },
        {
          title: 'Dean\'s List (우수 교육생)',
          issuer: 'KT AIVLE School',
          date: '2024.08',
          description: ["AI 개발자 Track 상위 5% 내외 선정"]
        },
        {
          title: '2024 ICPC Seoul Regional 전북대 예선 은상',
          issuer: '전북대학교 공과대학',
          date: '2024.11',
          description: ["예선 3위 입상"]
        },
        {
          title: '2023-2 SW캡스톤디자인 경진대회 대상',
          issuer: '전북대학교 SW중심대학사업단',
          date: '2023.12',
          description: ["LX 협력 '하천 불법 점용 탐지' 프로젝트 1위", "AI 모델 설계 및 인식 성능 향상 알고리즘 개발"]
        },
        {
          title: '제1회 오픈소스 SW 해커톤 캠프 최우수상',
          issuer: '전북대학교 공과대학',
          date: '2023.12',
          description: ["'K-Detect: 킥보드 불법 이용 탐지' 2위 수상", "객체 탐지 모델 설계 및 데이터 가공"]
        },
        {
          title: '2023 컴퓨터인공지능학부 작품경진대회 대상',
          issuer: '전북대학교',
          date: '2023.12',
          description: ["'Take-A-Seat: AI 자동 출석 확인 웹서비스' 1위 수상", "백엔드 개발 및 클라우드 인프라 설계"]
        },
        {
          title: '2023 ICPC Seoul Regional 전북대 예선 은상',
          issuer: '전북대학교 공과대학',
          date: '2023.11',
          description: ["예선 3위 입상"]
        }
      ]
    },
    portfolio: {
      title: "Projects",
      filters: {
        all: "전체",
        web: "웹 개발",
        ai: "AI/ML",
        research: "연구"
      },
      modal: {
        overview: "개요",
        role: "역할",
        techStack: "기술 스택",
        keyFeatures: "주요 기능",
        links: {
          github: "GitHub",
          demo: "Live",
          paper: "Paper"
        }
      },
      projects: [
        {
          id: 1,
          title: '전북대학교 SW교육 플랫폼 (Litmus) 리뉴얼 개발',
          category: 'Web Development',
          image: 'https://via.placeholder.com/600x400?text=Litmus',
          description: '전북대학교 SW교육 플랫폼 리뉴얼 (SaaS 전환 및 기능 고도화)',
          details: {
            problem: '기존 시스템의 보안 취약점, 잦은 장애, 기술 노후화로 인한 유지보수 어려움 해결 필요',
            solution: '온프레미스 시스템을 클라우드 기반 SaaS로 전환하여 확장성과 운영 효율성을 확보하고, Django 기반의 견고한 백엔드 아키텍처를 구축했습니다.',
            role: 'Backend Lead & PM (기여도 40%)',
            tech: ['Python', 'Django', 'OpenStack', 'Javascript', 'MySQL'],
            features: [
              '서비스 기획 및 제품 로드맵 설계',
              'SW 교육 특화 기능 백엔드 개발',
              'OpenStack 인프라 설계 및 구축',
              '600명+ 사용자 대상 안정적 서비스 운영'
            ]
          },
          links: {
            demo: 'https://litmus.jbnu.ac.kr/',
            github: null
          }
        },
        {
          id: 2,
          title: '고정밀 영상을 활용한 소하천 불법 점유 탐지 기법 개발',
          category: 'AI & Data Science',
          image: 'https://via.placeholder.com/600x400?text=River+Guard',
          description: '고정밀 영상을 활용한 소하천 불법 점유 탐지 기법 개발 (with LX)',
          details: {
            problem: '하천 부지 불법 점유물에 대한 수동 점검의 비효율성 개선 필요',
            solution: 'AI 인식 모델 기반의 자동화 SW 솔루션을 개발하여 탐지 및 불법 여부 판별 프로세스를 자동화했습니다.',
            role: 'AI Engineer (기여도 50%)',
            tech: ['Python', 'PyTorch', 'Pandas', 'Wandb', 'QGIS'],
            features: [
              'Task 특화 Detection AI 모델 개발',
              '전이학습 기반 불법 여부 판별 알고리즘 개발',
              'QGIS 플러그인 솔루션 개발',
              '기술 이전을 통한 실무 자동화 기여'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/JBNU_Capstone-2023'
          }
        },
        {
          id: 3,
          title: '디지털 트윈 기반 도시침수 스마트 대응 시스템',
          category: 'AI & Data Science',
          image: 'https://via.placeholder.com/600x400?text=Flood+Dashboard',
          description: '디지털 트윈 기반 도시침수 스마트 대응 시스템',
          details: {
            problem: '파편화된 대응 시스템과 실시간 데이터 통합 부족으로 인한 신속 대응의 어려움',
            solution: '실시간 수위 모니터링, 침수 확률 예측, 피해 추정을 통합한 대시보드를 구축하여 의사결정을 지원합니다.',
            role: 'AI Engineer & PM',
            tech: ['Python', 'Django', 'Scikit-learn', 'YOLO', 'LangChain'],
            features: [
              '실시간 수위 및 침수 위험도 시각화',
              'Logistic Regression 기반 홍수 확률 예측',
              'YOLO 기반 공공시설물 이상 탐지',
              'LLM 기반 대응 매뉴얼 챗봇'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/AIVLE-AI-26/flood-dashboard'
          }
        },
        {
          id: 4,
          title: 'K-Detect: 교내 전동 킥보드 불법 이용 사례 탐지 솔루션',
          category: 'AI & Data Science',
          image: 'https://via.placeholder.com/600x400?text=K-Detect',
          description: '교내 전동 킥보드 불법 이용 사례 탐지 솔루션',
          details: {
            problem: '전동 킥보드 불법 이용(2인 탑승, 헬멧 미착용) 사고 증가 및 단속의 한계',
            solution: 'CCTV 영상과 YOLOv8 모델을 활용해 실시간으로 위반을 감지하고 자동 경고 방송을 송출하는 시스템을 개발했습니다.',
            role: 'AI Researcher',
            tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
            features: [
              '실시간 위반 감지 (헬멧 미착용, 다인 탑승)',
              '자동 음성 경고 방송 시스템',
              '기존 CCTV 인프라 활용',
              '데이터 수집 및 모델 파인튜닝'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/K-Detect'
          }
        },
        {
          id: 5,
          title: 'Take-A-Seat: AI 안면 인식 기능을 활용한 자동 출석 확인 웹 서비스',
          category: 'Web Development',
          image: 'https://via.placeholder.com/600x400?text=Take-A-Seat',
          description: 'AI 안면 인식 기능을 활용한 자동 출석 확인 웹 서비스',
          details: {
            problem: '수동 출석 확인의 비효율성과 대리 출석 문제',
            solution: '안면 인식 기술을 활용하여 빠르고 정확하게 출석을 처리하고 관리할 수 있는 웹 서비스를 구축했습니다.',
            role: 'Backend Developer & DevOps',
            tech: ['Node.js', 'Express', 'AWS', 'Amazon Rekognition'],
            features: [
              'Amazon Rekognition 기반 실시간 안면 인식',
              '자동 출석 처리 및 현황 대시보드',
              '클라우드 인프라 설계 및 배포',
              '높은 인식 정확도 달성'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/Take-A-Seat'
          }
        },
        {
          id: 6,
          title: '디지털 P&ID 인식 성능 향상을 위한 심볼 탐지 기술 연구',
          category: 'AI & Research',
          image: 'https://via.placeholder.com/600x400?text=P%26ID',
          description: '디지털 P&ID 인식 성능 향상을 위한 심볼 탐지 기술 연구',
          details: {
            problem: '복잡한 P&ID 도면의 수동 디지털화 과정의 비효율성',
            solution: '딥러닝 기반 객체 탐지 모델을 활용하여 도면 내 심볼을 자동으로 인식하고 분류하는 기술을 연구했습니다.',
            role: 'Undergraduate Researcher',
            tech: ['Python', 'PyTorch', 'Wandb', 'OpenCV'],
            features: [
              '2D P&ID 심볼 Object Detection',
              '데이터 증강을 통한 모델 강건성 확보',
              '기존 대비 6배 이상의 성능 향상 달성',
              '산학협력 과제 수행'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/PNID_big_symbol'
          }
        },
        {
          id: 7,
          title: 'SW 교육을 위한 자동 과제 채점 시스템의 설계 및 실제 운영 사례 소개 및 고찰',
          category: 'Research',
          image: 'https://via.placeholder.com/600x400?text=KCC+Paper',
          description: '2025 한국컴퓨터종합학술대회 (KCC2025) 학술 논문',
          details: {
            problem: '효율적인 SW 교육 운영을 위한 자동 채점 시스템의 필요성',
            solution: '오픈소스 기반의 자동 채점 시스템을 설계하고 실제 운영 데이터를 분석하여 효과적인 운영 방안을 제안했습니다.',
            role: '3rd Author (Co-author)',
            tech: ['Research', 'Academic Writing', 'Education Tech'],
            features: [
              'KCC 2025 채택 논문',
              '자동 채점 시스템 설계 방법론 도출',
              '실제 운영 데이터 기반 효과 분석',
              '효율적 시스템 구축 가이드라인 제시'
            ]
          },
          links: {
            demo: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318560',
            github: null,
            paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318560'
          }
        }
      ]
    },
    resume: {
      title: "Resume & Skills",
      skillsTitle: "Technical Skills",
      download: "이력서 다운로드"
    }
  },
  en: {
    hero: {
      greeting: "Hi, I am",
      title: "bootkorea.",
      subtitle: "Software Engineer & Product Manager.",
      description: "I bridge the gap between complex engineering and intuitive user experiences.\nSpecializing in building robust, scalable applications and data-driven products.",
      cta: "Check out my work"
    },
    about: {
      title: "About Me",
      intro: [
        "Hello! I'm **Bu-Seung So**, a passionate **Software Engineer** and **Product Manager**. I specialize in building scalable web applications and AI-driven solutions that solve real-world problems.",
        "With a strong foundation in Computer Science and hands-on experience in both development and product management, I thrive in bridging the gap between technical feasibility and user needs. My journey has taken me from academic research in Computer Vision to practical cloud service planning and full-stack development.",
        "I am currently focused on leveraging cloud technologies and AI to create impactful digital products."
      ],
      tabs: {
        experience: "Experience",
        education: "Education",
        activities: "Activities",
        certs: "Certifications",
        awards: "Awards"
      },
      experience: [
        {
          title: 'Product Manager (Internship)',
          company: 'NAVER Cloud',
          period: '2025.07 ~ Present',
          description: [
            'Managed the product lifecycle of CLOVA Studio, a hyperscale AI development platform.',
            'Conducted data-driven analysis using Python and Pandas to identify user pain points and optimize product features.',
            'Collaborated with engineering and design teams to define product requirements and roadmap.',
            'Performed Prompt Engineering to enhance the performance and accuracy of AI models for specific use cases.'
          ],
          tags: ['Product Management', 'Python', 'Pandas', 'Prompt Engineering', 'CLOVA Studio']
        },
        {
          title: 'Cloud Service Planner & PM (Internship)',
          company: 'GABIA',
          period: '2025.03 ~ 2025.05',
          description: [
            'Analyzed QA data to derive UI/UX improvements for the Gen2 Cloud Service.',
            'Authored comprehensive user manuals and managed technical documentation.',
            'Utilized Figma for prototyping new features and Confluence/JIRA for agile project management.',
            'Bridged communication between developers and stakeholders to ensure timely delivery of features.'
          ],
          tags: ['Cloud Service Planning', 'Figma', 'Confluence', 'JIRA', 'UI/UX']
        },
        {
          title: 'Litmus Platform Renewal Project',
          company: 'JBNU SW Univ. Corps',
          period: '2024.04 ~ 2024.08',
          description: [
            'Led the backend architecture design and development using Django for the university\'s coding education platform.',
            'Implemented a scalable Online Judge System capable of handling high concurrent traffic.',
            'Migrated the legacy system to a cloud-based SaaS architecture, improving operational efficiency and security.',
            'Successfully deployed and maintained the system for over 500 active student users.'
          ],
          tags: ['Backend Engineering', 'Django', 'OpenStack', 'System Architecture', 'SaaS']
        }
      ],
      education: [
        {
          title: 'Chonbuk National University',
          degree: 'Bachelor of Computer Science Engineering',
          period: '2019.03 - 2025.02',
          description: ['GPA 3.79/4.5 (131 Credits)', 'Major Courses: Operating Systems (A+), Artificial Intelligence (A+), Cloud Computing (A+)']
        },
        {
          title: 'KT AIVLE School 5th - AI Track',
          degree: 'KT',
          period: '2024.02 - 2024.08',
          description: ['Dean\'s List (Excellent Trainee)', 'Big Project Practical Award', 'Intensive training in AI modeling, Deep Learning, and Cloud infrastructure.']
        }
      ],
      activities: [
        {
          title: 'VCLab@JBNU',
          role: 'Undergraduate Researcher',
          period: '2022.10 ~ 2023.09',
          description: ['Conducted research on Deep Learning and Computer Vision.', 'Participated in seminars and implemented state-of-the-art papers.']
        },
        {
          title: 'ALPS@JBNU',
          role: 'Vice President (2022), Core Member',
          period: '2021.12 ~ 2024.12',
          description: ['Organized algorithm study groups and programming contests.', 'Mentored junior students in data structures and algorithms.']
        },
        {
          title: 'Global Hackathons',
          role: 'Participant',
          period: '2024 ~ 2025',
          description: ['Junction Asia 2025: Developed an innovative AI solution.', 'HackSeoul 2024: Collaborated with international teams on fintech projects.']
        }
      ],
      certs: [
        {
          title: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: '2025.04 - 2028.04'
        },
        {
          title: 'SQL Developer (SQLD)',
          issuer: 'K-Data',
          date: '2024.04'
        },
        {
          title: 'TOPCIT Level 3',
          issuer: 'IITP',
          date: '2023.10'
        }
      ],
      awards: [
        {
          title: '2024 CSE Capstone Design Grand Prize',
          issuer: 'JBNU CSE',
          date: '2024.12',
          description: ["Won 1st prize for 'Flow' project"]
        },
        {
          title: '2024 ICPC Contest Silver Prize',
          issuer: 'JBNU College of Engineering',
          date: '2024.11',
          description: ["Ranked 3rd in JBNU Preliminary"]
        },
        {
          title: '2024 AI Online Competition 2nd Prize',
          issuer: 'JBNU SW Univ.',
          date: '2024.06',
          description: ["Developed Fake Voice Detection AI Model"]
        },
        {
          title: '2023 CSE Capstone Design Grand Prize',
          issuer: 'JBNU CSE',
          date: '2023.12',
          description: ["Won 1st prize for 'Take-A-Seat' project"]
        },
        {
          title: '2023 ICPC Contest Silver Prize',
          issuer: 'JBNU College of Engineering',
          date: '2023.11',
          description: ["Ranked 3rd in JBNU Preliminary"]
        },
        {
          title: '1st Open Source SW Idea Hackathon 2nd Prize',
          issuer: 'JBNU',
          date: '2023.12',
          description: ["Won 2nd prize for 'K-Detect' project"]
        },
        {
          title: '2023 SW Capstone Design Competition 1st Prize',
          issuer: 'JBNU SW Univ.',
          date: '2023.12',
          description: ["Won 1st prize for River Guard project with LX"]
        }
      ]
    },
    portfolio: {
      title: "Projects",
      filters: {
        all: "All",
        web: "Web Dev",
        ai: "AI/ML",
        research: "Research"
      },
      modal: {
        overview: "Overview",
        role: "Role",
        techStack: "Tech Stack",
        keyFeatures: "Key Features",
        links: {
          github: "GitHub",
          demo: "Live",
          paper: "Paper"
        }
      },
      projects: [
        {
          id: 1,
          title: 'Litmus',
          category: 'Web Development',
          image: 'https://via.placeholder.com/600x400?text=Litmus',
          description: 'A comprehensive renewal of the JBNU SW Education Platform "Litmus" to address security vulnerabilities and technical debt.',
          details: {
            problem: 'The existing legacy system suffered from security vulnerabilities, frequent downtimes, and outdated technology, making maintenance difficult.',
            solution: 'Re-architected the entire backend using Django, implemented a robust Online Judge system, and migrated to a cloud-based SaaS model for better scalability and operational efficiency.',
            role: 'Backend Lead & Architect',
            tech: ['Python', 'Django', 'OpenStack', 'Docker', 'MySQL'],
            features: [
              'Scalable Online Judge System',
              'Cloud-based SaaS Architecture',
              'Enhanced Security & Performance',
              'Supports 500+ Concurrent Users'
            ]
          },
          links: {
            demo: 'https://litmus.jbnu.ac.kr/',
            github: null
          }
        },
        {
          id: 2,
          title: 'Flood Dashboard',
          category: 'AI & Data Science',
          image: 'https://via.placeholder.com/600x400?text=Flood+Dashboard',
          description: 'Digital Twin-based Smart Urban Flood Response System for Gwangju City.',
          details: {
            problem: 'Fragmented response systems and lack of real-time data integration made it difficult for local governments to respond quickly to urban flooding.',
            solution: 'Developed a unified dashboard integrating real-time water levels, flood probability prediction (Logistic Regression), and damage estimation (Random Forest).',
            role: 'AI Engineer & Full Stack Developer',
            tech: ['Python', 'Django', 'Scikit-learn', 'YOLO', 'LangChain'],
            features: [
              'Real-time Water Level Monitoring',
              'Flood Probability Prediction (Logistic Regression)',
              'Flood Area Prediction (Random Forest)',
              'Public Facility Anomaly Detection (YOLO)',
              'AI Chatbot for Response Manuals (LangChain)'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/AIVLE-AI-26/flood-dashboard'
          }
        },
        {
          id: 3,
          title: 'K-Detect',
          category: 'AI & Data Science',
          image: 'https://via.placeholder.com/600x400?text=K-Detect',
          description: 'AI solution for detecting illegal personal mobility (electric scooter) usage on campus.',
          details: {
            problem: 'Rising accidents due to illegal scooter usage (2+ riders, no helmet) and lack of effective enforcement methods.',
            solution: 'Leveraged existing CCTV infrastructure with YOLOv8 to detect violations in real-time and broadcast audio warnings via speakers.',
            role: 'AI Researcher',
            tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
            features: [
              'Real-time Violation Detection (No Helmet, Multi-riding)',
              'Automated Audio Warnings',
              'Cost-effective (Uses existing CCTV)',
              'High Accuracy Object Detection'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/K-Detect'
          }
        },
        {
          id: 4,
          title: 'Take-A-Seat',
          category: 'Web Development',
          image: 'https://via.placeholder.com/600x400?text=Take-A-Seat',
          description: 'Automated attendance check web service using AI face recognition.',
          details: {
            problem: 'Manual attendance checks are time-consuming and prone to errors or proxy attendance.',
            solution: 'Built a web-based automated system where users can check in via face recognition, streamlining the process for schools and organizations.',
            role: 'Full Stack Developer',
            tech: ['Python', 'Django', 'Face Recognition API', 'React'],
            features: [
              'AI-based Face Recognition',
              'Automated Attendance Tracking',
              'User-friendly Web Interface',
              'Admin Dashboard for Management'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/Take-A-Seat'
          }
        },
        {
          id: 5,
          title: 'River Guard',
          category: 'AI & Data Science',
          image: 'https://via.placeholder.com/600x400?text=River+Guard',
          description: 'Illegal river occupation detection system using YOLOv8 and QGIS.',
          details: {
            problem: 'Manual inspection of illegal river occupation (e.g., unauthorized farming, structures) is labor-intensive and inefficient.',
            solution: 'Automated the detection process using YOLOv8 trained on aerial imagery and mapped results to river district coordinates using QGIS.',
            role: 'AI Engineer',
            tech: ['Python', 'YOLOv8', 'QGIS', 'PyQt'],
            features: [
              'Illegal Object Detection (Greenhouses, Tents)',
              'GIS Integration for Precise Location',
              'Automated Report Generation',
              'Trained on 135k+ Aerial Images'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/JBNU_Capstone-2023'
          }
        },
        {
          id: 6,
          title: 'P&ID Symbol Detection',
          category: 'AI & Research',
          image: 'https://via.placeholder.com/600x400?text=P%26ID',
          description: 'Automatic symbol recognition and digitization for Piping and Instrumentation Diagrams (P&ID).',
          details: {
            problem: 'Digitizing complex P&ID drawings manually is time-consuming and error-prone.',
            solution: 'Developed a pipeline using deep learning object detection models to automatically recognize and classify various symbols within the diagrams.',
            role: 'AI Researcher',
            tech: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning'],
            features: [
              'Automated P&ID Symbol Detection',
              'Robustness via Data Augmentation',
              'Preprocessing Pipeline for Digitization',
              'High mAP Performance'
            ]
          },
          links: {
            demo: null,
            github: 'https://github.com/bootkorea/PNID_big_symbol'
          }
        },
        {
          id: 7,
          title: 'Design and Operation of Automated Grading System for SW Education',
          category: 'Research',
          image: 'https://via.placeholder.com/600x400?text=KCC+Paper',
          description: 'Research paper published at KCC 2025 (Korea Computer Congress).',
          details: {
            problem: 'Need for an efficient automated grading system for large-scale SW education.',
            solution: 'Proposed a methodology for designing an open-source based automated grading system and analyzed its effectiveness through real-world operation data.',
            role: '3rd Author (Co-author)',
            tech: ['Research', 'AI', 'Academic Writing'],
            features: [
              'Accepted at KCC 2025',
              'Automated Grading System Design Methodology',
              'Effectiveness Analysis based on Real Data',
              'Guidelines for Efficient System Construction'
            ]
          },
          links: {
            demo: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318560',
            github: null,
            paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318560'
          }
        }
      ]
    },
    resume: {
      title: "Resume & Skills",
      skillsTitle: "Technical Skills",
      download: "Download PDF"
    }
  }
};
