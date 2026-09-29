function updateBones(context) {
    const pitch = context.getPitchInput()
    const yaw = context.getYawInput()
    const roll = context.getRollInput()
    const time = context.tickCount() + context.getPartialTick()
    const previousTime = context.getFloat("propellerTime", time)
    const elapsed = Math.max(0, Math.min(2, time - previousTime))
    const power = Math.max(0, Math.min(1, context.getPower() / 100))
    const throttle = Math.max(0, Math.min(1, context.getThrottleLevel() / 100))
    const angle = (context.getFloat("propellerAngle", 0)
        + elapsed * 1000 * power * (0.25 + 0.75 * throttle)) % 360
    context.setFloat("propellerTime", time)
    context.setFloat("propellerAngle", angle)

    const builder = createPoseBuilder()
    builder.setRotation("propeller_spin", 0, 0, -angle)
    builder.setRotation("aileron_upper_left", roll * 16, 0, 0)
    builder.setRotation("aileron_lower_left", roll * 16, 0, 0)
    builder.setRotation("aileron_upper_right", -roll * 16, 0, 0)
    builder.setRotation("aileron_lower_right", -roll * 16, 0, 0)
    builder.setRotation("elevator", pitch * 16, 0, 0)
    builder.setRotation("rudder", 0, -yaw * 16, 0)
    builder.setRotation("ctrl", -8 * pitch, 0, -8 * roll)
    return builder
}
