function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("wingLR", -pitchInput * 14, 0, 0)
    builder.setRotation("wingRR", -pitchInput * 14, 0, 0)
    builder.setRotation("wingLB", rollInput * 14, 0, 0)
    builder.setRotation("wingRB", -rollInput * 14, 0, 0)
    builder.setRotation("weiyiR", 0, -yawInput * 14, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    return builder
}
