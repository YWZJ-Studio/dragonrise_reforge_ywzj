function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("group8", -pitchInput * 14, 0, 0)
    builder.setRotation("group24", -pitchInput * 14, 0, 0)
    builder.setRotation("group35", rollInput * 16, 0, 0)
    builder.setRotation("group36", -rollInput * 16, 0, 0)
    builder.setRotation("group10", 0, -yawInput * 14, 0)
    return builder
}
