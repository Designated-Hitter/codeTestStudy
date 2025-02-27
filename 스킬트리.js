function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let skill_tree of skill_trees) {
      //skill에 있는 문자만 남김 (예: skill = "CBD", skill_tree = "BACDE" → "BD"만 남음)
      //필터링된 문자들을 하나의 문자열로 변환 ("BD", "CB", "CBA", ...)
        let filtered = skill_tree.split("").filter(s => skill.includes(s)).join("");
      //filtered가 skill의 앞부분과 같은지 확인 ("CBD".startsWith("CB") → ✅
        if (skill.startsWith(filtered)) {
            answer++;
        }
    }
    return answer;
}
