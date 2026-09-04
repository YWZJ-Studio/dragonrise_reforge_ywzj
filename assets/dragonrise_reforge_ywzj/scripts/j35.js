function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("wingLB", -pitchInput * 16 + rollInput * 16, 0, 0)
    builder.setRotation("wingRB", -pitchInput * 16 - rollInput * 16, 0, 0)
    builder.setRotation("bone", 0, -yawInput * 14, 0)
    builder.setRotation("bone2", 0, -yawInput * 14, 0)
    return builder
}
