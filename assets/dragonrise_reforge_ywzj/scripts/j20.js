function updateBones(context) {
    const pitchInput = context.getPitchInput();
    const yawInput = context.getYawInput();
    const rollInput = context.getRollInput();
    const builder = createPoseBuilder();
    const clamp = (val) => Math.max(-16, Math.min(16, val));
    builder.setRotation("wingLB", clamp(pitchInput * 16 + rollInput * 16), 0, 0);
    builder.setRotation("wingRB", clamp(pitchInput * 16 - rollInput * 16), 0, 0);
    builder.setRotation("flapL2",  clamp(pitchInput * 16 + rollInput * 16), 0, 0);
    builder.setRotation("flapR2",  clamp(pitchInput * 16 - rollInput * 16), 0, 0);
    builder.setRotation("wingLR", clamp(rollInput * 16 - pitchInput * 16), 0, 0);
    builder.setRotation("wingRR", clamp(-rollInput * 16 - pitchInput * 16), 0, 0);
    builder.setRotation("weiyiL", 0, -yawInput * 16, 0);
    builder.setRotation("weiyiR", 0, -yawInput * 16, 0);
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    return builder;
}