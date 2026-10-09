function updateBones(context) {
    const phase = (context.getFloat("propellerRotation", 0) + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", phase);
    const builder = createPoseBuilder();
    builder.setRotation("rotor_upper", 0, -phase * 1, 0);
    builder.setRotation("rotor_lower", 0, -phase * -1, 0);
    builder.setRotation("ctrl", context.getPitchInput() * 10, 0, -context.getRollInput() * 10);
    builder.setRotation("collective", context.getCollectivePitch() / 100 * 20, 0, 0);
    builder.setRotation("auto_cannon", -context.getPartXRot("auto_cannon"), -context.getPartYRot("auto_cannon"), 0);
    return builder;
}
