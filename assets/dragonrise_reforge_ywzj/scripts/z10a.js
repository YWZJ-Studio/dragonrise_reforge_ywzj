function updateBones(context) {
    const phase = (context.getFloat("propellerRotation", 0) + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", phase);
    const builder = createPoseBuilder();
    builder.setRotation("rotor_main", 0, -phase * 1, 0);
    builder.setRotation("rotor_tail", -phase * 5, 0, 0);
    builder.setRotation("ctrl", context.getPitchInput() * 10, 0, -context.getRollInput() * 10);
    builder.setRotation("ctrl2", context.getPitchInput() * 10, 0, -context.getRollInput() * 10);
    builder.setRotation("lightboll", 0, -context.getPartYRot("sighting_system"), 0);
    builder.setRotation("boll", context.getPartXRot("sighting_system"), 0, 0);
    builder.setRotation("turret", 0, -context.getPartYRot("auto_cannon"), 0);
    builder.setRotation("barrel", -context.getPartXRot("auto_cannon"), 0, 0);
    return builder;
}
