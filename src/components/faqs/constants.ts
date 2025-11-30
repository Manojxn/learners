import { FAQ } from "./types";

export const DEFAULT_FAQS: FAQ[] = [
    // Popular / featured
    {
        _id: "faq-pop-1",
        question: "What is the schedule for the upcoming mid-term examinations?",
        answer:
            "The detailed schedule for the upcoming mid-term examinations will be published on the student portal and school notice boards two weeks prior to the examination period. Please check regularly for updates.",
        category: "exam-related",
        isFeatured: true,
        displayOrder: 1,
    },
    {
        _id: "faq-pop-2",
        question: "What is the admission process for Learners Global School?",
        answer:
            "The admission process typically includes submitting an application form, attending an interaction or entrance assessment (where applicable), and completing the document verification process. Detailed guidelines are provided on the Admissions page for each grade level.",
        category: "Admissions",
        isFeatured: true,
        displayOrder: 2,
    },
    {
        _id: "faq-pop-3",
        question: "What academic programs are offered at Learners Global PU College?",
        answer:
            "Learners Global PU College offers a range of pre-university programs with streams such as Science and Commerce, combining strong academic foundations with skill-based learning and career guidance.",
        category: "Academics",
        isFeatured: true,
        displayOrder: 3,
    },
    {
        _id: "faq-pop-4",
        question: "What are the tuition fees for the upcoming academic year?",
        answer:
            "Tuition fees vary by grade and program. A detailed fee structure for the upcoming academic year is available on the Admissions page or can be requested from the school office.",
        category: "fee-related",
        isFeatured: true,
        displayOrder: 4,
    },
    {
        _id: "faq-pop-5",
        question: "How can businesses and corporate professionals collaborate with Learners Global?",
        answer:
            "Learners Global welcomes partnerships for internships, talent acquisition, skill development workshops, guest lectures, and corporate social responsibility initiatives. Please contact our GCC department for collaboration opportunities.",
        category: "Partnerships",
        isFeatured: true,
        displayOrder: 5,
    },
    {
        _id: "faq-pop-6",
        question: "Where can investors find information about Learners Global's performance and vision?",
        answer:
            "Investors and stakeholders can access information about our vision, strategic initiatives, and performance metrics through our annual reports and investor relations communication. For detailed queries, please reach out via the contact details on our website.",
        category: "General",
        isFeatured: true,
        displayOrder: 6,
    },

    // exam-related
    {
        _id: "faq-exam-1",
        question: "What is the schedule for the upcoming mid-term examinations?",
        answer:
            "The detailed schedule for the upcoming mid-term examinations will be announced on the student portal and school notice boards two weeks in advance. Notifications will also be shared via email or SMS, where applicable.",
        category: "exam-related",
    },
    {
        _id: "faq-exam-2",
        question: "Can I request a re-evaluation of my exam paper?",
        answer:
            "Yes. Students can apply for re-evaluation within the stipulated time after results are declared by submitting a formal request form and paying the applicable re-evaluation fee. Final decisions are communicated after the review is completed.",
        category: "exam-related",
    },

    // Admissions
    {
        _id: "faq-adm-1",
        question: "What is the admission process for Learners Global School?",
        answer:
            "Parents can begin the admission process by filling out the online enquiry or application form, followed by an interaction or entrance assessment (if required), campus visit, and document verification. Confirmation of admission is subject to seat availability and completion of formalities.",
        category: "Admissions",
    },
    {
        _id: "faq-adm-2",
        question: "What are the fee structures and scholarship opportunities available?",
        answer:
            "The fee structure varies by grade level and program. Learners Global also offers scholarships based on academic performance and financial need. Details about eligibility, required documents, and application timelines are provided on the Admissions page under the Scholarships section.",
        category: "Admissions",
    },

    // Academics
    {
        _id: "faq-acad-1",
        question: "What academic programs are offered at Learners Global PU College?",
        answer:
            "Learners Global PU College offers Science and Commerce streams with subject combinations designed to prepare students for competitive exams, professional courses, and higher education. Counsellors help students choose the right track based on their interests and goals.",
        category: "Academics",
    },
    {
        _id: "faq-acad-2",
        question: "What are the qualifications and experience of the faculty members?",
        answer:
            "Our faculty comprises highly qualified educators with strong academic backgrounds and significant classroom experience. Many of them hold postgraduate degrees and have specialized training in modern teaching methodologies and student mentoring.",
        category: "Academics",
    },

    // fee-related
    {
        _id: "faq-fee-1",
        question: "What are the tuition fees for the upcoming academic year?",
        answer:
            "Tuition fees are reviewed annually and communicated to parents before the start of the admission cycle. A detailed breakdown of fees, including tuition, transport, and other charges, is available from the admissions office or the official fee schedule.",
        category: "fee-related",
    },
    {
        _id: "faq-fee-2",
        question: "Are there any scholarships or financial aid options available?",
        answer:
            "Learners Global School & PU College offers a range of scholarships based on merit and need. Information regarding eligibility, documentation, and application timelines is available on the Scholarships section of the Admissions page.",
        category: "fee-related",
    },

    // Campus Life
    {
        _id: "faq-campus-1",
        question: "How does Learners Global support student well-being and holistic development?",
        answer:
            "We prioritize student well-being through counselling support, co-curricular clubs, sports, arts, leadership programs, and value-based education. Our aim is to nurture confident, empathetic, and well-rounded individuals.",
        category: "Campus Life",
    },
    {
        _id: "faq-campus-2",
        question: "Are there transportation facilities available for students?",
        answer:
            "Yes. Safe and reliable transportation is provided on designated routes. Details about bus routes, timings, and fees can be obtained from the school office or the Transport section of our website.",
        category: "Campus Life",
    },

    // Partnerships
    {
        _id: "faq-part-1",
        question: "How can businesses and corporate professionals collaborate with Learners Global?",
        answer:
            "Organizations can collaborate with Learners Global through internships, campus recruitment, mentorship programs, workshops, and CSR initiatives. Please contact the GCC team for a tailored partnership plan.",
        category: "Partnerships",
    },

    // General
    {
        _id: "faq-gen-1",
        question: "Where can investors find information about Learners Global's performance and vision?",
        answer:
            "Investors can request access to our annual reports, strategic plans, and impact summaries through the investor relations contact provided on the website. We share key metrics, growth initiatives, and long-term vision in these communications.",
        category: "General",
    },
];
