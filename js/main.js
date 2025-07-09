// Static data instead of loading from CSV
function getStaticData(type) {
    const data = {
        "loans": [
            { type: "Home Loan", description: "Complete assistance for home loans including property valuation, documentation, and bank coordination. We help you get the best interest rates." },
            { type: "Business Loan", description: "Comprehensive support for business loans with expert guidance on documentation, business plan preparation, and bank negotiations." },
            { type: "Personal Loan", description: "Quick and efficient personal loan processing with minimal documentation. We ensure fast approval and disbursement." },
            { type: "Education Loan", description: "Specialized education loan services for students with complete documentation support and college coordination." },
            { type: "Vehicle Loan", description: "Assistance in vehicle loan processing with quick approval and competitive interest rates." },
            { type: "Property Mortgage", description: "Expert guidance in property mortgage with legal verification and documentation support." },
            { type: "Gold Loan", description: "Quick and easy gold loans with best market value assessment and competitive interest rates." },
            { type: "Agricultural Loan", description: "Specialized loans for farmers with comprehensive support for documentation and subsidy programs." },
            { type: "Commercial Vehicle Loan", description: "Financing solutions for commercial vehicles with flexible repayment options." },
            { type: "Construction Loan", description: "Project-specific construction financing with stage-wise disbursement facility." }
        ],
        "banks": [
            { name: "Global Trust Bank", description: "Offering competitive interest rates on home and personal loans" },
            { name: "City Finance Bank", description: "Specialized in business and commercial loans" },
            { name: "Heritage Banking Corporation", description: "Expert in mortgage and property loans" },
            { name: "National Commerce Bank", description: "Leading provider of education and vehicle loans" },
            { name: "Progressive Credit Union", description: "Focused on personal and small business loans" },
            { name: "Unity Savings Bank", description: "Comprehensive range of retail and commercial banking services" },
            { name: "Future Finance Bank", description: "Innovative solutions for all types of loans" }
        ],
        "partner-institutions": [
            {
                name: "St. Joseph's College of Nursing",
                location: "Dharmagiri, Kothamangalam",
                type: "Nursing"
            },
            {
                name: "Westfort College of Nursing",
                location: "Thrissur",
                type: "Nursing"
            },
            {
                name: "Mar Baselios College of Engineering",
                location: "Thiruvananthapuram",
                type: "Engineering"
            },
            {
                name: "Rajagiri College of Engineering",
                location: "Kochi",
                type: "Engineering"
            }
        ],
        "courses": {
            "Healthcare": [
                {
                    name: "B.Sc Nursing",
                    duration: "4 years",
                    eligibility: "12th with Science (PCB)",
                    description: "Bachelor of Science in Nursing program"
                },
                {
                    name: "B.Pharm",
                    duration: "4 years",
                    eligibility: "12th with PCB",
                    description: "Bachelor of Pharmacy"
                },
                {
                    name: "B.Sc Allied Health Sciences",
                    duration: "3-4 years",
                    eligibility: "12th with Science",
                    description: "Various specializations in healthcare"
                },
                {
                    name: "B.Sc Food Technology & Quality Assurance",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Food technology and quality assurance"
                },
                {
                    name: "B.Sc Optometry",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Optometry and vision science"
                },
                {
                    name: "B.Sc Phycology",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Study of algae and aquatic plants"
                },
                {
                    name: "B.Sc Hospital Administration",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Hospital and healthcare administration"
                },
                {
                    name: "B.Sc Cardiac Care Technology (Cct)",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Cardiac care technology specialization"
                },
                {
                    name: "B.Sc Anasthesia & Operation Theatre Technology (Pes University)",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Anesthesia and OT technology"
                },
                {
                    name: "B.Sc Medical Laboratory",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Medical laboratory technology"
                },
                {
                    name: "B.Sc Emergency Medical Technology",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Emergency medical technology"
                },
                {
                    name: "B.Sc Microbiology",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Microbiology specialization"
                },
                {
                    name: "B.Sc Rct (Root Canal Treatment)",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Root canal treatment specialization"
                },
                {
                    name: "B.Sc Medical Radiology",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Medical radiology specialization"
                },
                {
                    name: "B.Sc Medical Imaging Technology",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Medical imaging technology"
                },
                {
                    name: "B.Sc AT & OT",
                    duration: "3 years",
                    eligibility: "12th with Science",
                    description: "Assistive Technology & Occupational Therapy"
                },
                {
                    name: "BASLT Bachelor Of Audiology & Speech Language Pathology",
                    duration: "4 years",
                    eligibility: "12th with Science",
                    description: "Audiology & Speech Language Pathology"
                },
                {
                    name: "BHA Healthcare Administration",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Healthcare administration specialization"
                },
                {
                    name: "BOT Bachelor Of Occupational Therapy",
                    duration: "4 years",
                    eligibility: "12th with Science",
                    description: "Bachelor of Occupational Therapy"
                },
                {
                    name: "BPT Bachelor Of Physiotherapy",
                    duration: "4.5 years",
                    eligibility: "12th with Science",
                    description: "Bachelor of Physiotherapy"
                },
                {
                    name: "D.Pharm",
                    duration: "2 years",
                    eligibility: "12th with Science",
                    description: "Diploma in Pharmacy"
                },
                {
                    name: "GNM",
                    duration: "3 years",
                    eligibility: "12th with any stream",
                    description: "General Nursing and Midwifery"
                },
                {
                    name: "Hotel & Tourism Management",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Hospitality and tourism management"
                },
                {
                    name: "M.Pharm",
                    duration: "2 years",
                    eligibility: "B.Pharm",
                    description: "Master of Pharmacy"
                },
                {
                    name: "M.Sc Microbiology",
                    duration: "2 years",
                    eligibility: "B.Sc Microbiology or related field",
                    description: "Master of Science in Microbiology"
                },
                {
                    name: "MBBS",
                    duration: "5.5 years",
                    eligibility: "12th with PCB<br>NEET qualification",
                    description: "Bachelor of Medicine and Bachelor of Surgery"
                }
            ],
            "Technology": [
                {
                    name: "B.Sc Cyber Forensic",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "Specialization in cyber security and forensics"
                },
                {
                    name: "B.Sc Computer Science",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "Bachelor's in Computer Science"
                },
                {
                    name: "B.Sc AI & DS Artificial Intelligence & Data Science",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "Artificial Intelligence & Data Science specialization"
                },
                {
                    name: "BCA AI Artificial Intelligence And Data Science",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "BCA with AI and Data Science specialization"
                },
                {
                    name: "BCA AI Cloud Computing Cyber Security",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "BCA with AI,<br>Cloud Computing,<br>Cyber Security specialization"
                },
                {
                    name: "BCA All Branches",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "Bachelor of Computer Applications in all branches"
                },
                {
                    name: "BCA AI Artificial Intelligence",
                    duration: "3 years",
                    eligibility: "12th with Mathematics",
                    description: "BCA with Artificial Intelligence specialization"
                },
                {
                    name: "Deploma Full Stack Development",
                    duration: "1 year",
                    eligibility: "12th pass",
                    description: "Diploma in Full Stack Development"
                },
                {
                    name: "MCA IBM",
                    duration: "2 years",
                    eligibility: "Graduation in Computer Science<br>or related field",
                    description: "Master of Computer Applications (IBM specialization)"
                }
            ],
            "Business": [
                {
                    name: "B.Com Computer Application",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Commerce with focus on computer applications"
                },
                {
                    name: "B.Com Finance & Time",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Specialization in finance and time management"
                },
                {
                    name: "B.Com Logistic",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Specialization in logistics management"
                },
                {
                    name: "B.Com CMA",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Cost and Management Accounting specialization"
                },
                {
                    name: "B.Com Stock Market & Trading",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Specialization in stock market and trading"
                },
                {
                    name: "B.Com Fintech",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Financial technology specialization"
                },
                {
                    name: "B.Sc Hotel Management",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Hospitality and hotel management"
                },
                {
                    name: "B.Sc Bachelor Of Hotel Management",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Bachelor of Hotel Management"
                },
                {
                    name: "BBA Aviation And Logistic",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Business administration in aviation and logistics"
                },
                {
                    name: "BBA Business Analystics",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Business analytics specialization"
                },
                {
                    name: "Hotel & Tourism Management",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Hospitality and tourism management"
                },
                {
                    name: "M.Com Finance & Taxation",
                    duration: "2 years",
                    eligibility: "B.Com or equivalent",
                    description: "Master of Commerce in Finance & Taxation"
                },
                {
                    name: "MBA Master Of Business Administration",
                    duration: "2 years",
                    eligibility: "Graduation in any discipline",
                    description: "Master of Business Administration"
                }
            ],
            "Engineering": [
                {
                    name: "B.Tech All Branches",
                    duration: "4 years",
                    eligibility: "12th with PCM",
                    description: "Engineering in various specializations"
                },
                {
                    name: "Marine Engineering",
                    duration: "4 years",
                    eligibility: "12th with PCM",
                    description: "Specialization in marine engineering"
                }
            ],
            "Others": [
                {
                    name: "B.Sc Agricultural",
                    duration: "4 years",
                    eligibility: "12th with Science",
                    description: "Agricultural sciences and technology"
                },
                {
                    name: "B.Sc Fashion Photography",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Professional fashion photography"
                },
                {
                    name: "BA All Branches",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Bachelor of Arts in various specializations"
                },
                {
                    name: "BSW Labour Welfare Social Work",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Bachelor of Social Work in Labour Welfare and Social Work"
                },
                {
                    name: "BVA Bachelor Of Visual Arts",
                    duration: "4 years",
                    eligibility: "12th pass",
                    description: "Bachelor of Visual Arts"
                },
                {
                    name: "Deploma Airline Cabin Crew",
                    duration: "1 year",
                    eligibility: "12th pass",
                    description: "Diploma in Airline Cabin Crew"
                },
                {
                    name: "Deploma Under Water Welding",
                    duration: "1 year",
                    eligibility: "12th pass",
                    description: "Diploma in Under Water Welding"
                },
                {
                    name: "Fashion Designing (Advance Fabric Styling)",
                    duration: "3 years",
                    eligibility: "12th pass",
                    description: "Advanced Fabric Styling and Fashion Designing"
                },
                {
                    name: "MSW Master Of Social Work",
                    duration: "2 years",
                    eligibility: "Graduation in any discipline",
                    description: "Master of Social Work"
                }
            ]
        }
    };
    return data[type] || [];
}

// Function to parse CSV data
function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;
        
        const values = lines[i].split(',').map(value => value.trim());
        const entry = {};
        
        headers.forEach((header, index) => {
            entry[header] = values[index];
        });
        
        result.push(entry);
    }

    return result;
}

// Function to populate course categories and their courses
function populateCourseCategories(coursesByCategory) {
    const container = document.getElementById('course-listings');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Dynamically get all categories
    const categories = Object.keys(coursesByCategory);

    // Function to render courses
    function renderCourses(category = 'all') {
        container.innerHTML = '';
        categories.forEach(courseCategory => {
            if (category === 'all' || category === courseCategory) {
                const categorySection = document.createElement('div');
                categorySection.className = 'col-12 mb-4';
                categorySection.setAttribute('data-category', courseCategory);

                // Add category heading
                const categoryHeading = document.createElement('h3');
                categoryHeading.className = 'mb-3';
                categoryHeading.textContent = courseCategory;
                categorySection.appendChild(categoryHeading);

                // Create row for courses
                const coursesRow = document.createElement('div');
                coursesRow.className = 'row';

                // Add courses for this category
                coursesByCategory[courseCategory].forEach(course => {
                    const courseCol = document.createElement('div');
                    courseCol.className = 'col-md-6 mb-3';
                    courseCol.innerHTML = `
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${course.name}</h5>
                                <p class="card-text">
                                    <strong>Duration:</strong> ${course.duration ? course.duration : '-'}<br>
                                    <strong>Eligibility:</strong> ${course.eligibility ? course.eligibility : '-'}<br>
                                    ${course.description ? course.description : ''}
                                </p>
                            </div>
                        </div>
                    `;
                    coursesRow.appendChild(courseCol);
                });

                categorySection.appendChild(coursesRow);
                container.appendChild(categorySection);
            }
        });
    }

    // Initial render
    renderCourses('all');

    // Set up filter buttons dynamically
    const filterButtons = document.querySelectorAll('.category-filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            renderCourses(category);
        });
    });
}

// Function to populate partner institutions
function populatePartnerInstitutions(institutions) {
    const container = document.getElementById('partner-institutions');
    if (!container) return;

    institutions.forEach(institution => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${institution.name}</h5>
                    <p class="card-text">
                        <strong>Location:</strong> ${institution.location}<br>
                        <strong>Type:</strong> ${institution.type}
                    </p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Function to populate partner institutions
function populateCourses(courses) {
    const courseContainer = document.getElementById('course-listings');
    if (!courseContainer) return;

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'col-md-6 col-lg-4 mb-4';
        courseElement.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${course.college}</h5>
                    <p class="card-text">
                        ${course.courses.map(c => c.name).join(', ')}
                    </p>
                </div>
            </div>
        `;
        courseContainer.appendChild(courseElement);
    });
}

// Function to populate detailed course listings
function populateDetailedCourses(courses) {
    const container = document.getElementById('detailed-courses');
    if (!container) return;

    courses.forEach(institution => {
        const section = document.createElement('div');
        section.className = `course-section mb-5 ${institution.category}`;
        section.innerHTML = `
            <h3 class="mb-4">${institution.college}</h3>
            <div class="row">
                ${institution.courses.map(course => `
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${course.name}</h5>
                                <div class="course-details">
                                    <p class="mb-2"><strong>Duration:</strong> ${course.duration}</p>
                                    <div class="collapse" id="req-${course.name.replace(/\s+/g, '')}">
                                        <p class="card-text"><strong>Requirements:</strong> ${course.requirements}</p>
                                    </div>
                                    <button class="btn btn-link p-0" type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target="#req-${course.name.replace(/\s+/g, '')}">
                                        View Requirements
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(section);
    });

    // Add category filter functionality
    const filterButtons = document.querySelectorAll('[data-category]');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const sections = container.getElementsByClassName('course-section');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            Array.from(sections).forEach(section => {
                if (category === 'all' || section.classList.contains(category)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

// Function to populate loan services
function populateLoanServices(services) {
    const servicesContainer = document.getElementById('loan-services');
    if (!servicesContainer) return;

    // Clear existing content
    servicesContainer.innerHTML = '';

    // Function to render loan services
    function renderServices(showAll = false) {
        servicesContainer.innerHTML = '';
        
        // Determine how many services to show
        const servicesToShow = showAll ? services.length : 6;
        
        // Create and append service elements
        services.slice(0, servicesToShow).forEach(service => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'col-md-6 mb-4';
            serviceElement.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${service.type}</h5>
                        <p class="card-text">${service.description}</p>
                    </div>
                </div>
            `;
            servicesContainer.appendChild(serviceElement);
        });

        // Add or remove "View More" button as needed
        const existingButton = document.querySelector('.view-more-loans');
        if (existingButton) {
            existingButton.remove();
        }

        if (!showAll && services.length > 6) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'col-12 text-center mt-3';
            buttonContainer.innerHTML = `
                <button class="btn btn-primary view-more-loans">View More Loans</button>
            `;
            servicesContainer.parentElement.appendChild(buttonContainer);

            // Add click event to the button
            buttonContainer.querySelector('.view-more-loans').addEventListener('click', () => {
                renderServices(true);
            });
        }
    }

    // Initial render with 6 items
    renderServices(false);
}

// Function to populate bank partners
function populateBankPartners(banks) {
    const container = document.getElementById('bank-partners');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Function to render banks
    function renderBanks(showAll = false) {
        container.innerHTML = '';
        
        // Determine how many banks to show
        const banksToShow = showAll ? banks.length : 6;

        // New code with circular overlay
        banks.slice(0, banksToShow).forEach((bank, index) => {
            const bankElement = document.createElement('div');
            bankElement.className = 'col-md-6 col-lg-4 mb-4';
            bankElement.innerHTML = `
            <div class="card bank-card h-100">
            <div class="card-body text-center">
            <div class="logo-circle">
                <!-- <img src="images/banks/${index % 7 + 1}.jpg" alt="${bank.name} Logo" class="bank-logo mb-3"> -->
                <img src="images/banks/${index % 7 + 1}.jpg" alt="${bank.name} Logo" class="bank-logo mb-3">
            </div>
            <h5 class="card-title">${bank.name}</h5>
            <p class="card-text">${bank.description}</p>
            </div>
            </div>
            `;
            container.appendChild(bankElement);
        });

        // Add or remove "View All" button as needed
        const existingButton = document.querySelector('.view-all-banks');
        if (existingButton) {
            existingButton.remove();
        }

        if (!showAll && banks.length > 6) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'col-12 text-center mt-3';
            buttonContainer.innerHTML = `
                <button class="btn btn-primary view-all-banks">View All Banks</button>
            `;
            container.parentElement.appendChild(buttonContainer);

            // Add click event to the button
            buttonContainer.querySelector('.view-all-banks').addEventListener('click', () => {
                renderBanks(true);
            });
        }
    }

    // Initial render with 6 items
    renderBanks(false);
}

// Initialize the page based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    switch(currentPage) {
        case 'courses.html':
            const courseData = getStaticData('courses');
            populateCourseCategories(courseData);
            break;
        case 'education.html':
            const partnerInstitutions = getStaticData('partner-institutions');
            populatePartnerInstitutions(partnerInstitutions);
            break;
        case 'loans.html':
            const loanServices = getStaticData('loans');
            const bankPartners = getStaticData('banks');
            populateLoanServices(loanServices);
            populateBankPartners(bankPartners);
            break;
    }
});
