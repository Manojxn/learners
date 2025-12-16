import { Vertical, Recognition, Differentiator } from "./types";

export const DEFAULT_VERTICALS: Vertical[] = [
    {
        _id: "vertical-1",
        title: "Learners Global School & PU College",
        shortDescription:
            "Fostering young minds with a holistic CBSE school curriculum from Pre-KG to 12th, focused on foundational excellence and character development",
        verticalImage:
            "/images/school_college.png",
        knowMoreUrl: "https://learnersglobalschool.com/",
    },
    {
        _id: "vertical-2",
        title: "Learners PU College",
        shortDescription:
            "Preparing students for higher education through rigorous academic programs and career-focused guidance, strengthened by integrated NEET, JEE, CET, and IIT coaching",
        verticalImage:
            "/images/college.png",
        knowMoreUrl: "https://learners.co.in/",
    },
    {
        _id: "vertical-3",
        title: "Learners Digital",
        shortDescription:
            "Connecting talent with global opportunities and fostering corporate partnerships for mutual growth.",
        verticalImage:
            "/images/GCC.png",
        knowMoreUrl: "https://learnersdigital.com/",
    },
];

export const DEFAULT_RECOGNITIONS: Recognition[] = [
    {
        _id: "rec-1",
        recognitionName: "Best PU College",
        recognitionImage: "https://cdn-icons-png.flaticon.com/512/2583/2583906.png",
        awardYear: "2023",
    },
    {
        _id: "rec-2",
        recognitionName: "Excellence in Sports",
        recognitionImage: "https://cdn-icons-png.flaticon.com/512/2583/2583788.png",
        awardYear: "2022",
    },
    {
        _id: "rec-3",
        recognitionName: "Best Infrastructure",
        recognitionImage: "https://cdn-icons-png.flaticon.com/512/2583/2583912.png",
        awardYear: "2023",
    },
    {
        _id: "rec-4",
        recognitionName: "Academic Excellence Award",
        recognitionImage: "https://cdn-icons-png.flaticon.com/512/2583/2583909.png",
        awardYear: "2023",
    },
    {
        _id: "rec-5",
        recognitionName: "Innovation in Education",
        recognitionImage: "https://cdn-icons-png.flaticon.com/512/2583/2583901.png",
        awardYear: "2022",
    },
    {
        _id: "rec-6",
        recognitionName: "Green Campus Initiative",
        recognitionImage: "https://cdn-icons-png.flaticon.com/512/2583/2583898.png",
        awardYear: "2023",
    },
];

export const DEFAULT_DIFFERENTIATORS: Differentiator[] = [
    {
        _id: "diff-1",
        title: "Holistic Development",
        description:
            "Our curriculum emphasizes academic excellence alongside character building, critical thinking, and extracurricular engagement for well-rounded individuals.",
    },
    {
        _id: "diff-2",
        title: "Experienced Faculty",
        description:
            "A team of highly qualified and dedicated educators committed to nurturing each student's potential and fostering a love for learning.",
    },
    {
        _id: "diff-3",
        title: "Modern Infrastructure",
        description:
            "State-of-the-art facilities, advanced laboratories, and digital learning resources create an optimal environment for innovative education.",
    },
    {
        _id: "diff-4",
        title: "Global Perspective",
        description:
            "We prepare students for a globalized world through an internationalized curriculum, cultural exchange programs, and diverse learning experiences.",
    },
];
