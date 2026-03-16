const missiles_pl_8 = ["agL2", "agL8", "agL3", "agL9", "agL4", "agL10", "agL5", "agL11"]

function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const previousGunBarrelRotation = context.getFloat("gunBarrelRotation", 0);
    const deltaTime = (context.currentTimeMillis() - context.lastRenderTime()) / 1000 * 20;
    const deltaRotation = context.getPower() > 0 ? (deltaTime * 32) : 0;
    const gunBarrelRotation = (previousGunBarrelRotation + deltaRotation) % 360;
    context.setFloat("gunBarrelRotation", gunBarrelRotation)

    const builder = createPoseBuilder();
    // 螺旋桨
    builder.setRotation("group21", 0, 0, -propellerRotation);
    builder.setRotation("group24", 0, 0, -propellerRotation);
    builder.setRotation("group33", 0, 0, -propellerRotation);
    builder.setRotation("group29", 0, 0, -propellerRotation);
    // 舵面
    builder.setRotation("group13", -pitchInput * 16, 0, 0);
    builder.setRotation("group48", -pitchInput * 16, 0, 0);
    builder.setRotation("yw2", 0, -yawInput * 16, 0);
    builder.setRotation("wing_left", rollInput * 16, 0, 0);
    builder.setRotation("wing_right", -rollInput * 16, 0, 0);
    // 机炮
    builder.setRotation("octagon19", gunBarrelRotation, -context.getPartYRot("auto_cannon"), context.getPartXRot("auto_cannon"));
    // 105mm炮
    builder.setRotation("wp2", 0, -context.getPartYRot("105mm_cannon"), context.getPartXRot("105mm_cannon"));
    // 博福斯炮
    builder.setRotation("wp3", 0, -context.getPartYRot("40mm_cannon"), context.getPartXRot("40mm_cannon"));
    // 地狱火
    let remainMissiles = context.getWeaponRemainAmmo("sighting_system", 0)
    for (let i = 0; i < missiles_pl_8.length; i++) {
        if (i < missiles_pl_8.length - remainMissiles) {
            builder.hideBone(missiles_pl_8[i])
        }
    }
    return builder;
}
