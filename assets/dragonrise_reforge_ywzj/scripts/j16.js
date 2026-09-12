function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("flapL3", -pitchInput * 16, 0, 0)
    builder.setRotation("flapL2", -pitchInput * 16, 0, 0)
    builder.setRotation("wingflapL", rollInput * 16, 0, 0)
    builder.setRotation("wingflapL2", -rollInput * 16, 0, 0)
    builder.setRotation("VFflapL", 0, -yawInput * 14, 0)
    builder.setRotation("VFflapL2", 0, -yawInput * 14, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    builder.setRotation("ctrl2", -8 * pitchInput, 0, -8 * rollInput);
    return builder
}
