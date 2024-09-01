import { ProjectModalLearnings } from "../interfaces/ProjectModalLearning"

export interface ProjectModalBody {
    screenshotsList: string[],
    description: string,
    techList: string[],
    learnings: ProjectModalLearnings[],
    projectURL: string,
    sourceCode: string
}
  