function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("13", -pitchInput * 14 + rollInput * 12, 0, 0)
    builder.setRotation("2", -pitchInput * 14 - rollInput * 12, 0, 0)
    return builder
}
