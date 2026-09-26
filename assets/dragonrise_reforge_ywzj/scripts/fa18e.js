function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("LeftFlap2", -pitchInput * 16, 0, 0)
    builder.setRotation("RightFlap2", -pitchInput * 16, 0, 0)
    builder.setRotation("aileron_left", rollInput * 16, 0, 0)
    builder.setRotation("aileron_right", -rollInput * 16, 0, 0)
    builder.setRotation("rudder_left", 0, -yawInput * 14, 0)
    builder.setRotation("rudder_right", 0, -yawInput * 14, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput)
    return builder
}
