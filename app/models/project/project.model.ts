module.exports = (mongoose: any) => {
    const projectSchema = mongoose.Schema(
        {
            course: String,
            title: String,
            author: String,
            summary: String,
            problem: String,
            objectives: String,
            methodology: String,
            findings: String
        },
        { timestamps: true }
    )

    const project = mongoose.model('project', projectSchema)

    return project;
}