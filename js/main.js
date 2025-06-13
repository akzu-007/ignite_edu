// Static data instead of loading from CSV
function getStaticData(type) {
    const data = {
        courses: [
            {
                college: "St. Mary's Medical College",
                category: "healthcare",
                courses: [
                    {
                        name: "Bachelor of Science in Nursing (BSN)",
                        requirements: "High school diploma with minimum GPA of 3.0, Biology and Chemistry prerequisites",
                        duration: "4 years"
                    },
                    {
                        name: "Healthcare Administration",
                        requirements: "High school diploma with minimum GPA of 2.8, Mathematics and Business prerequisites",
                        duration: "3 years"
                    },
                    {
                        name: "Medical Laboratory Technology",
                        requirements: "High school diploma with strong science background, Biology and Chemistry prerequisites",
                        duration: "2 years"
                    }
                ]
            },
            {
                college: "Technical Institute of Engineering",
                category: "engineering",
                courses: [
                    {
                        name: "Computer Engineering",
                        requirements: "High school diploma with strong Mathematics and Physics, SAT/ACT scores required",
                        duration: "4 years"
                    },
                    {
                        name: "Mechanical Engineering",
                        requirements: "High school diploma with advanced Mathematics and Physics, SAT/ACT scores required",
                        duration: "4 years"
                    }
                ]
            },
            {
                college: "Creative Arts Academy",
                category: "arts",
                courses: [
                    {
                        name: "Digital Design",
                        requirements: "Portfolio submission, Basic computer skills",
                        duration: "3 years"
                    },
                    {
                        name: "Animation",
                        requirements: "Portfolio submission, Drawing skills assessment",
                        duration: "4 years"
                    }
                ]
            }
        ],        loans: [
            { type: "Home Loan", description: "Complete assistance for home loans including property valuation, documentation, and bank coordination. We help you get the best interest rates." },
            { type: "Business Loan", description: "Comprehensive support for business loans with expert guidance on documentation, business plan preparation, and bank negotiations." },
            { type: "Personal Loan", description: "Quick and efficient personal loan processing with minimal documentation. We ensure fast approval and disbursement." },
            { type: "Education Loan", description: "Specialized education loan services for students with complete documentation support and college coordination." },
            { type: "Vehicle Loan", description: "Assistance in vehicle loan processing with quick approval and competitive interest rates." },
            { type: "Property Mortgage", description: "Expert guidance in property mortgage with legal verification and documentation support." }
        ],
        banks: [
            { name: "Global Trust Bank", description: "Offering competitive interest rates on home and personal loans" },
            { name: "City Finance Bank", description: "Specialized in business and commercial loans" },
            { name: "Heritage Banking Corporation", description: "Expert in mortgage and property loans" },
            { name: "National Commerce Bank", description: "Leading provider of education and vehicle loans" },
            { name: "Progressive Credit Union", description: "Focused on personal and small business loans" },
            { name: "Unity Savings Bank", description: "Comprehensive range of retail and commercial banking services" }
        ]
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

    services.forEach(service => {
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
}

// Function to populate bank partners
function populateBankPartners(banks) {
    const container = document.getElementById('bank-partners');
    if (!container) return;

    banks.forEach((bank, index) => {
        const bankElement = document.createElement('div');
        bankElement.className = 'col-md-6 col-lg-4 mb-4';
        bankElement.innerHTML = `
            <div class="card bank-card h-100">
                <div class="card-body text-center">
                    <div class="bank-logo">
                        ${bank.name.charAt(0)}
                    </div>
                    <h5 class="card-title">${bank.name}</h5>
                    <p class="card-text">${bank.description}</p>
                </div>
            </div>
        `;
        container.appendChild(bankElement);
    });
}

// Initialize the page based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    console.log('Current page:', currentPage);
    
    if (currentPage.includes('education.html')) {
        const courses = getStaticData('courses');
        console.log('Loaded courses:', courses);
        populateCourses(courses);
    } else if (currentPage.includes('courses.html')) {
        const courses = getStaticData('courses');
        console.log('Loaded detailed courses:', courses);
        populateDetailedCourses(courses);
    } else if (currentPage.includes('loans.html')) {
        const services = getStaticData('loans');
        const banks = getStaticData('banks');
        console.log('Loaded services:', services);
        console.log('Loaded banks:', banks);
        populateLoanServices(services);
        populateBankPartners(banks);
    }
});
