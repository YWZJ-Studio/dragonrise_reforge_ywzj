function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("wingLR", -pitchInput * 14, 0, 0)
    builder.setRotation("wingRR", -pitchInput * 14, 0, 0)
    builder.setRotation("wingLR2", rollInput * 16, 0, 0)
    builder.setRotation("wingRR2", -rollInput * 16, 0, 0)
    builder.setRotation("bone5", 0, -yawInput * 12, 0)
    builder.setRotation("bone15", 0, -yawInput * 12, 0)
    return builder
}
