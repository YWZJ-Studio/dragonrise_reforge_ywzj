function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("wingLR", -pitchInput * 14, 0, 0)
    builder.setRotation("wingRR", -pitchInput * 14, 0, 0)
    builder.setRotation("wingLB", -pitchInput * 10 + rollInput * 16, 0, 0)
    builder.setRotation("wingRB", -pitchInput * 10 - rollInput * 16, 0, 0)
    builder.setRotation("weiyiR", 0, -yawInput * 14, 0)
    return builder
}
