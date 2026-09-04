function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("wingLR", -pitchInput * 16, 0, 0)
    builder.setRotation("wingRR", -pitchInput * 16, 0, 0)
    builder.setRotation("wingLB", rollInput * 16, 0, 0)
    builder.setRotation("wingRB", -rollInput * 16, 0, 0)
    builder.setRotation("verticalTail", 0, -yawInput * 14, 0)
    return builder
}
