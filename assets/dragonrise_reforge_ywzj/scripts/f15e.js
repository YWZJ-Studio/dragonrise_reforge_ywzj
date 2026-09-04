function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("flapL", -pitchInput * 14 + rollInput * 14, 0, 0)
    builder.setRotation("flapR", -pitchInput * 14 - rollInput * 14, 0, 0)
    builder.setRotation("VFL", 0, -yawInput * 12, 0)
    builder.setRotation("VFR", 0, -yawInput * 12, 0)
    return builder
}
