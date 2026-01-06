export const PROJECTS_DATA = [
    {
        slug: "cogent",
        title: "Cogent",
        description: "An AI-powered tutoring platform - Your all-in-one study companion.",
        fullDescription: "Cogent is an all-in-one AI tutoring platform that leverages Large Language Models to provide personalized, real-time educational support. It adapts to the student's learning pace and style, offering a unique curriculum tailored to their needs. With over 10,000+ users across 6 continents, Cogent is reshaping how students learn.",
        tags: ["Next.js", "AI", "PostgreSQL", "LaunchX"],
        link: "https://joincogent.com",
        embedUrl: "https://joincogent.com",
        highlights: ["Featured in The Rundown AI (1M+ subscribers)", "10,000+ Users", "Users in 6 Continents"],
        badges: [
            {
                href: "https://www.producthunt.com/products/cogent-2?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-cogent",
                src: "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=576875&theme=light&period=daily&t=1767617781954",
                alt: "Cogent - Your all-in-one study companion, powered by AI | Product Hunt",
                width: 250,
                height: 54
            },
            {
                href: "https://www.producthunt.com/products/cogent-2?embed=true&utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_campaign=badge-cogent",
                src: "https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=576875&theme=light&period=monthly&topic_id=204&t=1767617781955",
                alt: "Cogent - Your all-in-one study companion, powered by AI | Product Hunt",
                width: 250,
                height: 54
            }
        ]
    },
    {
        slug: "ftc-robotics",
        title: "FTC Robotics 23014",
        description: "Programming and Electrical Head of Benelux Region Winning and Record Holder.",
        fullDescription: "As the Programming and Electrical Head for Team 23014, I led the development of our robot's autonomous navigation, control systems, and electrical architecture. I created our team website, developed advanced telemetry software, and implemented complex control algorithms like PID and computer vision pipelines to maximize performance.",
        tags: ["Java", "Robotics", "Control Theory", "OpenCV"],
        link: "https://www.team23014.org/",
        embedUrl: "https://www.team23014.org/",
        highlights: ["Top 1% International", "Benelux Winning Alliance Captain", "Benelux Record Holder"],
        features: [
            {
                title: "Odometry Pods & Pedro Pathing",
                description: "We use three-wheel odometry pods along with a pinpoint IMU to track our robot's position on the field and subsequently feed the values into a customized iteration of PedroPathing, a state-of-the-art, modern pathing library. We were able to execute complex autonomous paths with dynamic path adjustments, allowing the robot to remain reactive and thus reliable during the autonomous period (even after contact with other bots)."
            },
            {
                title: "April Tag Automatic Turret Tracking",
                description: "We used the Limelight 3A's horizontal angle measurement tx (error to the AprilTag) to build a PD controller for our turret so it can continuously track the goal. On every control loop, we read the current tx value and compute the necessary adjustments to keep the goal centered in the camera view, even while the drivetrain is moving."
            },
            {
                title: "Custom Ball Detecting Depth Camera Pipeline",
                description: "For artifact tracking we built a dual-camera stereo vision pipeline using two Logitech C920 webcams. Each frame is converted to HSV and thresholded for green/purple balls; we then take the largest circular contour and fit it with minEnclosingCircle. Using the pinhole model, we calculate distance and heading to auto-intake game elements."
            },
            {
                title: "Swerve & Driver Simulation",
                description: "Created a custom driver simulation so our drivers can train virtually. Built with Unity, a bespoke physics engine, and our own control algorithms, the sim translates controller inputs into motor power and models wheel slip, inertia, and field friction to replicate the real robot's feel. Includes a swerve drive model for testing kinematics."
            },
            {
                title: "Custom Telemetry Software",
                description: "This telemetry dashboard shows real-time RPM, battery, turret and ramp positions, robot pose, and predicted shot trajectories so you can monitor performance live and spot issues quickly. It helps you calibrate and tune the shooter by plotting make/miss calibration graphs."
            },
            {
                title: "Air Sort",
                description: "Airsort means 'sorting' two shots in the air: we want the second ball to reach the goal plane a fixed time d after the first. By calculating the required flight time and horizontal distances, we solve for the necessary launch angles to ensure reliable rapid-fire scoring."
            }
        ]
    },
    {
        slug: "athlynk",
        title: "Athlynk",
        description: "Silent communication. Tactile feedback. Superior execution.",
        fullDescription: "Currently, traditional methods of learning plays (chalk-talks, video diagrams) leave athletes overwhelmed. Athlynk transforms play execution by combining a smart vibration band with a real-time coaching platform. Each band contains seven vibration motors controlled wirelessly by a central ESP32 chip using the ESP-NOW protocol (50x faster than Wi-Fi) for near-instant feedback. This empowers coaches to guide players silently through complex plays, reinforcing muscle memory and reducing confusion during high-pressure moments.",
        tags: ["IoT", "React", "ESP32", "Hardware"],
        link: "https://athlynk.netlify.app/dashboard/dashboard",
        embedUrl: "https://athlynk.netlify.app/dashboard/dashboard",
        highlights: ["Silent.", "Tactile.", "Real-time."],
        media: [
            {
                type: "youtube",
                src: "qHKfIKUDL74", // YouTube Video ID
                title: "Product Demo",
                description: "Full demonstration of the coaching interface and haptic response."
            },
            {
                type: "image",
                src: "/projects/athlynk/product-demo.png", // "The Dynamic Athlynk Experience"
                alt: "The Dynamic Athlynk Experience - Chest band and iPad App",
                title: "The Dynamic Athlynk Experience",
                description: "Integration between the haptic chest band and the iPad coaching application."
            },
            {
                type: "image",
                src: "/projects/athlynk/design-flow.png", // "Streamlined Hardware and Software Design"
                alt: "Streamlined Hardware and Software Design Flowchart",
                title: "Hardware & Software Flow",
                description: "Streamlined architecture showing the data flow from App to ESP32 to Haptic Motors."
            },
            {
                type: "placeholder",
                title: "CAD Animation",
                description: "Rotating 3D view of the chest band mechanism."
            }
        ]
    },
    {
        slug: "sensus",
        title: "SensUs Bio Competition", // "SensASH" Team
        description: "A novel urine analysis device for at-home kidney failure detection.",
        fullDescription: "Kidney failure is a silent threat effectively managed only through early detection. Our team, SensASH, developed a continuous biosensor concept to address this by monitoring creatinine and urea levels in urine—key biomarkers for kidney function. The device is designed to mount discreetly onto a toilet, employing a retractable probe to collect samples which are then analyzed using a piezo-enzymatic reaction with zinc oxide nanowires. This allows for affordable, non-invasive, and continuous at-home monitoring, bridging the gap in healthcare access for early diagnosis.",
        tags: ["Bio-Tech", "Research", "Sensors", "Healthcare"],
        link: "#",
        embedUrl: "/projects/SensASH/SensASH Research Paper.pdf",
        highlights: ["Novel Biosensor", "At-Home Detection", "Continuous Monitoring"],
        media: [
            {
                type: "image",
                src: "/projects/SensASH/sensor-concept.png",
                alt: "SensASH Device Concept",
                title: "SensASH Device Concept",
                description: "Mockup of the toilet-mounted biosensor unit."
            },
            {
                type: "placeholder",
                title: "Internal Mechanism",
                description: "Diagram of the retractable probe and fluid analysis system."
            }
        ]
    },
    {
        slug: "astropi",
        title: "European AstroPi",
        description: "Investigating the factors influencing Earth's magnetic field from the ISS.",
        fullDescription: "As part of Mission Space Lab Phase 4, Team Magneto investigated whether solar activity or geographical coordinates (latitude/longitude) primarily influence Earth's magnetic field. Using a Raspberry Pi 4 on the International Space Station, we collected over 1400 data points of magnetic field readings, location, and photos over 175 minutes. Our analysis revealed a parabolic relationship between latitude and magnetic strength, confirming that the field is significantly stronger near the poles due to magnetic field convergence.",
        tags: ["Python", "Space Tech", "Data Science", "Research"],
        link: "https://esamultimedia.esa.int/docs/edu/magneto.pdf",
        embedUrl: "/projects/AstroPi/magneto (1).pdf",
        highlights: ["Code ran on ISS", "ESA Runner Up", "1400+ Data Points"],
        media: [
            {
                type: "image",
                src: "/projects/AstroPi/iss-earth.jpg",
                alt: "Earth View from ISS",
                title: "View from the Station",
                description: "One of the photos captured by our code running on the ISS during the experiment."
            }
        ]
    }
];

export const EDUCATION_DATA = [
    {
        institution: "American School of The Hague",
        role: "International Baccalaureate Student",
        period: "Class of 2026",
        details: [
            "GPA 4.2",
            "IB HL: Math AA, Physics, Economics, Computer Science",
            "AP: Statistics (5.0), CS Principles (5.0)",
            "Extended Essay: Transformer Architecture Output Bias"
        ]
    },
    {
        institution: "LaunchX",
        role: "Entrepreneurship Program",
        period: "Jul 2024 – Aug 2024",
        details: [
            "Participated in the Bay Area LaunchX program.",
            "Successfully launched Cogent, an AI Tutoring platform.",
            "Selected for 'Fuel Your Passion' Global Feature."
        ]
    },
    {
        institution: "UPenn M&TSI",
        role: "College Credit Course",
        period: "Summer",
        details: ["Grade A"]
    },
    {
        institution: "Global Online Academy",
        role: "Intro to Legal Thinking",
        period: "Semester",
        details: ["Grade A+"]
    }
];

export const LEADERSHIP_DATA = [
    {
        organization: "Sanjeewani School Nepal",
        role: "Student Volunteer",
        period: "Sep 2023 – present",
        description: "Focused on technology improvements, digital training, and teaching for elementary students. Involved offline planning, fundraising, and school visits."
    },
    {
        organization: "Microsoft Future of Education",
        role: "Study Contributor (Your Big Year)",
        period: "Dec 2023 – Jun 2024",
        description: "Contributed to a study analyzing the impact of AI on education and testing developing products."
    },
    {
        organization: "National Honor Society",
        role: "Co-President",
        period: "Sep 2024 - present",
        description: "Leading chapter activities and service projects."
    },
    {
        organization: "Student Senate",
        role: "Co-President",
        period: "Sep 2023 - present",
        description: "Representing student body and coordinating ambassador programs."
    }
];

export const MEDIA_DATA = [
    {
        title: "LaunchX 'Fuel Your Passion' Feature",
        type: "Article",
        link: "https://www.launchx.com/alum/fuel-your-passion/abhishek-gopar-ramshanker",
        description: "Highlighting young founders worldwide. Featured for the success of Cogent."
    },
    {
        title: "The Innovator's Playbook",
        type: "Podcast",
        link: "https://open.spotify.com/show/1P0HHROawD8EHkELUpdWuB?si=2a7b92c9c5054e86",
        description: "Podcast creator exploring the intersection of AI, entrepreneurship, and innovation."
    },
    {
        title: "Interviews & Posts",
        type: "Social",
        link: "#",
        description: "Various discussions on AI in Education and Robotics."
    }
];

export const ACHIEVEMENTS_DATA = [
    {
        title: "Polish National Record",
        organization: "Reciting Pi",
        description: "Held the Polish National Record for reciting digits of Pi.",
        date: "Past",
        image: "/achievements/pi-record.jpg", // Placeholder until verified
        link: "#", // Add link if available
    },
    {
        title: "WCA Ranked",
        organization: "World Speed Cubing Association",
        description: "Ranked competitor in official World Cube Association events.",
        date: "Past",
        image: null,
        link: "https://www.worldcubeassociation.org/persons/2019KRIS13", // Example, user can update
    },
    {
        title: "European AstroPi Runner Up",
        organization: "ESA",
        description: "Code ran on ISS.",
        date: "Jun 2023",
        image: "/projects/AstroPi/iss-earth.jpg",
        link: "https://astro-pi.org/",
    },
    {
        title: "SensUs Bio Competition",
        organization: "TU Eindhoven",
        description: "Developed biosensor concept for kidney failure.",
        date: "Jun 2024",
        image: "placeholder", // Explicit placeholder signal
        link: "https://www.sensus.org/",
    },
    {
        title: "Duke of Edinburgh's Award",
        organization: "International Award",
        description: "Bronze and Silver levels completed.",
        date: "Sep 2023 - present",
        image: null,
        link: "https://intaward.org/",
    }
];
