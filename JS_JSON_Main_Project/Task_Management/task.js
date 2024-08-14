let tasks = [
    {
        id: 1,
        name: "Complete Project Report",
        description: "Finish the final report for the project and submit it.",
        status: "In Progress",
        dueDate: "2024-08-15",
        manager: {
            name: "Aastha Katharotiya",
            image: "img/aastha.jpg",
            age: 19,
            salary: 85000,
            passion: "Writing"
        },
        activity : {
            day_1 : "90",
            day_2 : "30",
            day_3 : "60",
            day_4 : "50"
        }
    },
    {
        id: 2,
        name: "Team Meeting",
        description: "Weekly team meeting to discuss project updates.",
        status: "Pending",
        dueDate: "2024-08-16",
        manager: {
            name: "Aashi Patel",
            image: "img/aashi.jpeg",
            age: 20,
            salary: 90000,
            passion: "Leadership"
        },
        activity : {
            day_1 : "30",
            day_2 : "70",
            day_3 : "50",
            day_4 : "80"
        }
    },
    {
        id: 3,
        name: "Code Review",
        description: "Review the code for the new feature implementation.",
        status: "In Progress",
        dueDate: "2024-08-17",
        manager: {
            name: "Harmi Pagada",
            image: "img/harmi.jpeg",
            age: 21,
            salary: 80000,
            passion: "Coding"
        },
        activity : {
            day_1 : "90",
            day_2 : "50",
            day_3 : "20",
            day_4 : "40"
        }
    },
    {
        id: 4,
        name: "Client Presentation",
        description: "Prepare and deliver presentation to the client.",
        status: "Pending",
        dueDate: "2024-08-18",
        manager: {
            name: "Komal Godhaniya",
            image: "img/komal.jpeg",
            age: 20,
            salary: 95000,
            passion: "Public Speaking"
        },
        activity : {
            day_1 : "30",
            day_2 : "40",
            day_3 : "60",
            day_4 : "70"
        }
    },
    {
        id: 5,
        name: "Design Mockups",
        description: "Create design mockups for the new website layout.",
        status: "Completed",
        dueDate: "2024-08-10",
        manager: {
            name: "Bhakti Savaliya",
            image: "img/bhakti.enc",
            age: 22,
            salary: 75000,
            passion: "Design"
        },
        activity : {
            day_1 : "80",
            day_2 : "30",
            day_3 : "10",
            day_4 : "50"
        }
    },
    {
        id: 6,
        name: "Database Backup",
        description: "Perform a full backup of the database.",
        status: "Pending",
        dueDate: "2024-08-19",
        manager: {
            name: "Mansi Jariya",
            image: "img/mansi.enc",
            age: 23,
            salary: 87000,
            passion: "Data Management"
        },
        activity : {
            day_1 : "80",
            day_2 : "20",
            day_3 : "70",
            day_4 : "100"
        }
    },
    {
        id: 7,
        name: "Update Documentation",
        description: "Update the project documentation with the latest changes.",
        status: "In Progress",
        dueDate: "2024-08-20",
        manager: {
            name: "Hetvi Mungra",
            image: "img/hetvi.enc",
            age: 18,
            salary: 88000,
            passion: "Technical Writing"
        },
        activity : {
            day_1 : "100",
            day_2 : "30",
            day_3 : "70",
            day_4 : "80"
        }
    },
    {
        id: 8,
        name: "Bug Fixes",
        description: "Fix bugs reported in the last testing phase.",
        status: "Pending",
        dueDate: "2024-08-21",
        manager: {
            name: "Vishva Ramoliya",
            image: "img/vishva.jpeg",
            age: 19,
            salary: 82000,
            passion: "Problem Solving"
        },
        activity : {
            day_1 : "10",
            day_2 : "40",
            day_3 : "80",
            day_4 : "30"
        }
    },
    {
        id: 9,
        name: "Deploy to Production",
        description: "Deploy the latest version of the application to production.",
        status: "Pending",
        dueDate: "2024-08-22",
        manager: {
            name: "Priya Lakhad",
            image: "img/priya.jpeg",
            age: 20,
            salary: 92000,
            passion: "Deployment"
        },
        activity : {
            day_1 : "90",
            day_2 : "80",
            day_3 : "60",
            day_4 : "100"
        }
    },
    {
        id: 10,
        name: "User Training",
        description: "Conduct training sessions for end users.",
        status: "Completed",
        dueDate: "2024-08-13",
        manager: {
            name: "Dhara bhaliya",
            image: "img/dhara.jpeg",
            age: 21,
            salary: 77000,
            passion: "Education"
        },
        activity : {
            day_1 : "30",
            day_2 : "50",
            day_3 : "40",
            day_4 : "80"
        }
    },
    {
        id: 11,
        name: "Feedback Review",
        description: "Review feedback from users and stakeholders.",
        status: "In Progress",
        dueDate: "2024-08-23",
        manager: {
            name: "Purva Desai",
            image: "img/purva.jpeg",
            age: 22,
            salary: 85000,
            passion: "User Experience"
        },
        activity : {
            day_1 : "50",
            day_2 : "10",
            day_3 : "60",
            day_4 : "80"
        }
    },
    {
        id: 12,
        name: "Create Marketing Plan",
        description: "Develop a marketing plan for the new product launch.",
        status: "Completed",
        dueDate: "2024-08-14",
        manager: {
            name: "Meera Godhaniya",
            image: "img/meera.jpeg",
            age: 22,
            salary: 91000,
            passion: "Marketing"
        },
        activity : {
            day_1 : "90",
            day_2 : "30",
            day_3 : "50",
            day_4 : "50"
        }
    },
    {
        id: 13,
        name: "Customer Support",
        description: "Provide support to customers with issues.",
        status: "Pending",
        dueDate: "2024-08-29",
        manager: {
            name: "Mansi Rajput",
            image: "img/manu.jpeg",
            age: 19,
            salary: 73000,
            passion: "Customer Service"
        },
        activity : {
            day_1 : "30",
            day_2 : "50",
            day_3 : "80",
            day_4 : "100"
        }
    },
    {
        id: 14,
        name: "Security Audit",
        description: "Conduct a security audit of the application.",
        status: "Pending",
        dueDate: "2024-08-24",
        manager: {
            name: "Rajeshree Rajoliya",
            image: "img/rajeshree_mam.jpeg",
            age: 25,
            salary: 93000,
            passion: "Cybersecurity"
        },
        activity : {
            day_1 : "10",
            day_2 : "30",
            day_3 : "70",
            day_4 : "50"
        }
    },
    {
        id: 15,
        name: "Performance Testing",
        description: "Perform performance testing on the application.",
        status: "Pending",
        dueDate: "2024-08-25",
        manager: {
            name: "Timpal Patel",
            image: "img/timpal_mam.jpeg",
            age: 23,
            salary: 87000,
            passion: "Optimization"
        },
        activity : {
            day_1 : "90",
            day_2 : "30",
            day_3 : "60",
            day_4 : "50"
        }
    },
    {
        id: 16,
        name: "Update Software",
        description: "Update all software packages to the latest versions.",
        status: "Pending",
        dueDate: "2024-08-26",
        manager: {
            name: "Jigna Rajput",
            image: "img/jigna_mam.jpeg",
            age: 30,
            salary: 79000,
            passion: "Software Development"
        },
        activity : {
            day_1 : "10",
            day_2 : "30",
            day_3 : "60",
            day_4 : "100"
        }
    },
    {
        id: 17,
        name: "Data Analysis",
        description: "Analyze the latest data from the project.",
        status: "In Progress",
        dueDate: "2024-08-30",
        manager: {
            name: "Anila Jadav",
            image: "img/anila_mam.jpeg",
            age: 26,
            salary: 85000,
            passion: "Data Science"
        },
        activity : {
            day_1 : "20",
            day_2 : "30",
            day_3 : "20",
            day_4 : "50"
        }
    },
    {
        id: 18,
        name: "Market Research",
        description: "Conduct market research for the new product.",
        status: "Pending",
        dueDate: "2024-08-31",
        manager: {
            name: "Chandni Desai",
            image: "img/chandni_mam.jpeg",
            age: 28,
            salary: 72000,
            passion: "Market Analysis"
        },
        activity : {
            day_1 : "30",
            day_2 : "40",
            day_3 : "50",
            day_4 : "80"
        }
    },
    {
        id: 19,
        name: "Network Maintenance",
        description: "Perform routine network maintenance.",
        status: "In Progress",
        dueDate: "2024-08-27",
        manager: {
            name: "Govrav Bundiwal",
            image: "img/govrav_sir.png",
            age: 24,
            salary: 88000,
            passion: "Network Security"
        },
        activity : {
            day_1 : "20",
            day_2 : "70",
            day_3 : "30",
            day_4 : "50"
        }
    },
    {
        id: 20,
        name: "Research New Technologies",
        description: "Research new technologies that could benefit the project.",
        status: "Pending",
        dueDate: "2024-08-28",
        manager: {
            name: "Harshad Dhaduk",
            image: "img/harshad_sir.jpeg",
            age: 35,
            salary: 76000,
            passion: "Innovation"
        },
        activity : {
            day_1 : "90",
            day_2 : "70",
            day_3 : "60",
            day_4 : "80"
        }
    }
];
