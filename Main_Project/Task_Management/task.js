let tasks = [
    {
        id: 1,
        name: "Complete Project Report",
        description: "Finish the final report for the project and submit it.",
        status: "In Progress",
        dueDate: "2024-08-15",
        manager: {
            name: "Alice Johnson",
            image: "https://picsum.photos/id/1005/100/100",
            age: 35,
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
            name: "Bob Smith",
            image: "https://picsum.photos/id/1027/100/100",
            age: 42,
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
            name: "Charlie Davis",
            image: "https://picsum.photos/id/1011/100/100",
            age: 30,
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
            name: "Diana Evans",
            image: "https://picsum.photos/id/1012/100/100",
            age: 38,
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
            name: "Ethan Foster",
            image: "https://picsum.photos/id/1013/100/100",
            age: 29,
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
            name: "Fiona Green",
            image: "https://picsum.photos/id/1015/100/100",
            age: 34,
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
            name: "George Harris",
            image: "https://picsum.photos/id/1016/100/100",
            age: 41,
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
            name: "Hannah Irving",
            image: "https://picsum.photos/id/1018/100/100",
            age: 37,
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
            name: "Ian Jackson",
            image: "https://picsum.photos/id/1019/100/100",
            age: 40,
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
            name: "Jackie Kim",
            image: "https://picsum.photos/id/1020/100/100",
            age: 33,
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
            name: "Kevin Lee",
            image: "https://picsum.photos/id/1021/100/100",
            age: 36,
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
        name: "Security Audit",
        description: "Conduct a security audit of the application.",
        status: "Pending",
        dueDate: "2024-08-24",
        manager: {
            name: "Lara Moore",
            image: "https://picsum.photos/id/1022/100/100",
            age: 39,
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
        id: 13,
        name: "Performance Testing",
        description: "Perform performance testing on the application.",
        status: "Pending",
        dueDate: "2024-08-25",
        manager: {
            name: "Michael Nelson",
            image: "https://picsum.photos/id/1023/100/100",
            age: 35,
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
        id: 14,
        name: "Update Software",
        description: "Update all software packages to the latest versions.",
        status: "Pending",
        dueDate: "2024-08-26",
        manager: {
            name: "Natalie Owens",
            image: "https://picsum.photos/id/1024/100/100",
            age: 32,
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
        id: 15,
        name: "Network Maintenance",
        description: "Perform routine network maintenance.",
        status: "In Progress",
        dueDate: "2024-08-27",
        manager: {
            name: "Oliver Perry",
            image: "https://picsum.photos/id/1025/100/100",
            age: 44,
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
        id: 16,
        name: "Research New Technologies",
        description: "Research new technologies that could benefit the project.",
        status: "Pending",
        dueDate: "2024-08-28",
        manager: {
            name: "Patricia Quinn",
            image: "https://picsum.photos/id/1026/100/100",
            age: 31,
            salary: 76000,
            passion: "Innovation"
        },
        activity : {
            day_1 : "90",
            day_2 : "70",
            day_3 : "60",
            day_4 : "80"
        }
    },
    {
        id: 17,
        name: "Create Marketing Plan",
        description: "Develop a marketing plan for the new product launch.",
        status: "Completed",
        dueDate: "2024-08-14",
        manager: {
            name: "Quincy Roberts",
            image: "https://picsum.photos/id/1027/100/100",
            age: 38,
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
        id: 18,
        name: "Customer Support",
        description: "Provide support to customers with issues.",
        status: "Pending",
        dueDate: "2024-08-29",
        manager: {
            name: "Rachel Scott",
            image: "https://picsum.photos/id/1028/100/100",
            age: 29,
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
        id: 19,
        name: "Data Analysis",
        description: "Analyze the latest data from the project.",
        status: "In Progress",
        dueDate: "2024-08-30",
        manager: {
            name: "Samuel Taylor",
            image: "https://picsum.photos/id/1029/100/100",
            age: 34,
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
        id: 20,
        name: "Market Research",
        description: "Conduct market research for the new product.",
        status: "Pending",
        dueDate: "2024-08-31",
        manager: {
            name: "Tina Underwood",
            image: "https://picsum.photos/id/1030/100/100",
            age: 27,
            salary: 72000,
            passion: "Market Analysis"
        },
        activity : {
            day_1 : "30",
            day_2 : "40",
            day_3 : "50",
            day_4 : "80"
        }
    }
];
