function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("LeftTailPlane2", -pitchInput * 16, 0, 0)
    builder.setRotation("RightTailPlane2", -pitchInput * 16, 0, 0)
    builder.setRotation("LeftFlap2", rollInput * 16, 0, 0)
    builder.setRotation("RightFlap2", -rollInput * 16, 0, 0)
    return builder
}
