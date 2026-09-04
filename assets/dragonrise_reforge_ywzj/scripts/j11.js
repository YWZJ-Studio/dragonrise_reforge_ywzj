function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("wingLB", -pitchInput * 16, 0, 0)
    builder.setRotation("wingRB", -pitchInput * 16, 0, 0)
    builder.setRotation("wingLR", rollInput * 16, 0, 0)
    builder.setRotation("wingRR", -rollInput * 16, 0, 0)
    builder.setRotation("LeftVerticalTail", 0, -yawInput * 14, 0)
    builder.setRotation("RightVerticalTail", 0, -yawInput * 14, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    return builder
}
