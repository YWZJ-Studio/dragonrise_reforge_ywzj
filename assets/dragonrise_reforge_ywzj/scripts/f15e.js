function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("group22", 0, 0, rollInput * 14)
    builder.setRotation("group2", 0, 0, -rollInput * 14)
    builder.setRotation("flapL", -pitchInput * 14, 0, 0)
    builder.setRotation("flapR", -pitchInput * 14, 0, 0)
    builder.setRotation("group20", 0, -yawInput * 12, 0)
    builder.setRotation("group19", 0, -yawInput * 12, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput)
    return builder
}
