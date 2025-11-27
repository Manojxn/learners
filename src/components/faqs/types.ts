export type FAQ = {
    _id: string;
    question: string;
    answer: string;
    category?: string;
    isFeatured?: boolean;
    displayOrder?: number;
};
