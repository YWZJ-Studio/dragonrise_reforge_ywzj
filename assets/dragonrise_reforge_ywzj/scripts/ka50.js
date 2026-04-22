function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 10) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder();
    // 双旋翼
    builder.setRotation("1", 0, propellerRotation, 0);
    builder.setRotation("2", 0, -propellerRotation, 0);

    // 机炮
    builder.setRotation("auto_cannon", -context.getPartXRot("auto_cannon"), -context.getPartYRot("auto_cannon"), 0);

    // 操作杆
    builder.setRotation("czg", context.getPitchInput() * 10, 0, -context.getRollInput() * 10);
    builder.setRotation("zjg", context.getCollectivePitch() / 100 * 20, 0, 0);

    return builder
}
