export interface BaseProject {
    course: String;
    title: String;
    author: String;
    summary: String;
    problem: String;
    objectives: String;
    methodology: String;
    findings: String;
}

export interface Project extends BaseProject {
    id: number;
}