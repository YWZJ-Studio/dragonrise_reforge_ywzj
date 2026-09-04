function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("LeftTailPlane2", -pitchInput * 16, 0, 0)
    builder.setRotation("RightTailPlane2", -pitchInput * 16, 0, 0)
    builder.setRotation("wingLB", rollInput * 16, 0, 0)
    builder.setRotation("wingRB", -rollInput * 16, 0, 0)
    builder.setRotation("LeftVerticalTail", 0, -yawInput * 14, 0)
    builder.setRotation("RightVerticalTail", 0, -yawInput * 14, 0)
    return builder
}
